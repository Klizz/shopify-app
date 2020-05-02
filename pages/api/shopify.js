import axios from "axios";
export default async (req, res) => {
  const tmp = req.headers.cookie.split("; ").reduce(function (result, v, i, a) {
    var k = v.split("=");
    result[k[0]] = k[1];
    return result;
  }, {});

  const headers = { headers: { "x-shopify-access-token": tmp.accessToken } };
  const url = "https://" + tmp.shopOrigin + "/admin/api/2019-10/";

  switch (req.method) {
    case "GET":
      {
        const response = await axios.get(url + "shop.json", headers);
        //console.log('response from shopify',response)

        if (response.status === 200) {
          const data = JSON.parse(JSON.stringify(response.data.shop));

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ shop: data }));
        } else {
          res.statusCode = 400;
        }
      }
      break;

    case "PUT":
      {
        const variants = req.body.shopify_variants;
        if (!variants || variants.length <= 0) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Variantes no encontradas" }));
          break;
        }

        let promises = [];
        for (let i = 0; i < variants.length; i++) {
          const tmp = variants[i].id.split("/");
          const id = tmp[tmp.length - 1];

          const payload = {
            variant: {
              id,
              price: variants[i].price
            }
          };

          promises.push(
            axios.put(`${url}variants/${id}.json`, payload, headers)
          );
        }

        await Promise.all(promises);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "ok" }));
      }
      break;

    default: {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Metodo no encontrado" }));
    }
  }
};

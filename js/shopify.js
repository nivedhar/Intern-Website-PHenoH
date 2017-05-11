$(document).ready(function(){
    
    setTimeout(function(){
        //<![CDATA[
        var client = ShopifyBuy.buildClient({
          domain: 'phenoh-store.myshopify.com',
          apiKey: '9709cb696a79e4e2e5437b4fb08e7bd1',
          appId: '6',
        });
        var ui = ShopifyBuy.UI.init(client);
        ui.createComponent('product', {
          id: [2158460099],
          node: document.getElementById('product-component-2059dc9bfc0'),
          moneyFormat: '${{amount}}',
          options: {"product":{"buttonDestination":"cart","layout":"vertical","variantId":"all","width":"280px","contents":{"img":true,"title":true,"variantTitle":false,"options":true,"price":true,"description":false,"buttonWithQuantity":false,"button":true,"quantity":false},"text":{"button":"ADD TO CART"},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%"}},"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"15px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"variantTitle":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"title":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","font-size":"16px","color":"#4c4c4c"},"description":{"color":"#4c4c4c","font-size":"14px","font-family":"Helvetica Neue, sans-serif"},"price":{"font-family":"Helvetica Neue, sans-serif","font-size":"18px","color":"#4c4c4c"},"quantityInput":{"font-size":"16px","padding-top":"16px","padding-bottom":"16px","color":"#4c4c4c"},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"title":true,"lineItems":true,"footer":true,"button":true},"text":{"title":"Cart","total":"Total","notice":"Shipping and discount codes are added at checkout.","button":"CHECKOUT"},"styles":{"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"16px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"cart":{"background-color":"#ffffff"},"footer":{"background-color":"#ffffff"},"title":{"color":"#4c4c4c"},"close":{":hover":{}}}},"modalProduct":{"contents":{"img":true,"title":true,"variantTitle":false,"options":true,"price":true,"description":true,"buttonWithQuantity":false,"button":true,"quantity":false},"text":{"button":"ADD TO CART"},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%"}},"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"15px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"variantTitle":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"title":{"font-family":"Helvetica Neue, sans-serif","font-size":"26px","color":"#4c4c4c"},"description":{"color":"#4c4c4c","font-size":"14px","font-family":"Helvetica Neue, sans-serif"},"price":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"quantityInput":{"font-size":"16px","padding-top":"16px","padding-bottom":"16px","color":"#4c4c4c"}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},"toggle":{"styles":{"toggle":{"font-family":"Helvetica Neue, sans-serif","background-color":"#78b657",":hover":{"background-color":"#5f9d3e"}}}},"modal":{"styles":{"modal":{"background-color":"#ffffff"}}},"option":{"styles":{"label":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","color":"#4c4c4c"},"select":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","color":"#4c4c4c"}}}}
        });
        //]]>
        
        //<![CDATA[
        var client = ShopifyBuy.buildClient({
          domain: 'phenoh-store.myshopify.com',
          apiKey: '9709cb696a79e4e2e5437b4fb08e7bd1',
          appId: '6',
        });
        var ui = ShopifyBuy.UI.init(client);
        ui.createComponent('product', {
          id: [2158480515],
          node: document.getElementById('product-component-c94c47ee454'),
          moneyFormat: '${{amount}}',
          options: {"product":{"buttonDestination":"cart","layout":"vertical","variantId":"all","width":"280px","contents":{"img":true,"title":true,"variantTitle":false,"options":true,"price":true,"description":false,"buttonWithQuantity":false,"button":true,"quantity":false},"text":{"button":"ADD TO CART"},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%"}},"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"15px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"variantTitle":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"title":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","font-size":"16px","color":"#4c4c4c"},"description":{"color":"#4c4c4c","font-size":"14px","font-family":"Helvetica Neue, sans-serif"},"price":{"font-family":"Helvetica Neue, sans-serif","font-size":"18px","color":"#4c4c4c"},"quantityInput":{"font-size":"16px","padding-top":"16px","padding-bottom":"16px","color":"#4c4c4c"},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"title":true,"lineItems":true,"footer":true,"button":true},"text":{"title":"Cart","total":"Total","notice":"Shipping and discount codes are added at checkout.","button":"CHECKOUT"},"styles":{"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"16px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"cart":{"background-color":"#ffffff"},"footer":{"background-color":"#ffffff"},"title":{"color":"#4c4c4c"},"close":{":hover":{}}}},"modalProduct":{"contents":{"img":true,"title":true,"variantTitle":false,"options":true,"price":true,"description":true,"buttonWithQuantity":false,"button":true,"quantity":false},"text":{"button":"ADD TO CART"},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%"}},"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"15px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"variantTitle":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"title":{"font-family":"Helvetica Neue, sans-serif","font-size":"26px","color":"#4c4c4c"},"description":{"color":"#4c4c4c","font-size":"14px","font-family":"Helvetica Neue, sans-serif"},"price":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"quantityInput":{"font-size":"16px","padding-top":"16px","padding-bottom":"16px","color":"#4c4c4c"}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},"toggle":{"styles":{"toggle":{"font-family":"Helvetica Neue, sans-serif","background-color":"#78b657",":hover":{"background-color":"#5f9d3e"}}}},"modal":{"styles":{"modal":{"background-color":"#ffffff"}}},"option":{"styles":{"label":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","color":"#4c4c4c"},"select":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","color":"#4c4c4c"}}}}
        });
        //]]>
        
        //<![CDATA[
        var client = ShopifyBuy.buildClient({
          domain: 'phenoh-store.myshopify.com',
          apiKey: '9709cb696a79e4e2e5437b4fb08e7bd1',
          appId: '6',
        });
        var ui = ShopifyBuy.UI.init(client);
        ui.createComponent('product', {
          id: [2158477187],
          node: document.getElementById('product-component-cfa98736150'),
          moneyFormat: '${{amount}}',
          options: {"product":{"buttonDestination":"cart","layout":"vertical","variantId":"all","width":"280px","contents":{"img":true,"title":true,"variantTitle":false,"options":true,"price":true,"description":false,"buttonWithQuantity":false,"button":true,"quantity":false},"text":{"button":"ADD TO CART"},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%"}},"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"15px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"variantTitle":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"title":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","font-size":"16px","color":"#4c4c4c"},"description":{"color":"#4c4c4c","font-size":"14px","font-family":"Helvetica Neue, sans-serif"},"price":{"font-family":"Helvetica Neue, sans-serif","font-size":"18px","color":"#4c4c4c"},"quantityInput":{"font-size":"16px","padding-top":"16px","padding-bottom":"16px","color":"#4c4c4c"},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"title":true,"lineItems":true,"footer":true,"button":true},"text":{"title":"Cart","total":"Total","notice":"Shipping and discount codes are added at checkout.","button":"CHECKOUT"},"styles":{"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"16px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"cart":{"background-color":"#ffffff"},"footer":{"background-color":"#ffffff"},"title":{"color":"#4c4c4c"},"close":{":hover":{}}}},"modalProduct":{"contents":{"img":true,"title":true,"variantTitle":false,"options":true,"price":true,"description":true,"buttonWithQuantity":false,"button":true,"quantity":false},"text":{"button":"ADD TO CART"},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%"}},"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"15px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"variantTitle":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"title":{"font-family":"Helvetica Neue, sans-serif","font-size":"26px","color":"#4c4c4c"},"description":{"color":"#4c4c4c","font-size":"14px","font-family":"Helvetica Neue, sans-serif"},"price":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"quantityInput":{"font-size":"16px","padding-top":"16px","padding-bottom":"16px","color":"#4c4c4c"}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},"toggle":{"styles":{"toggle":{"font-family":"Helvetica Neue, sans-serif","background-color":"#78b657",":hover":{"background-color":"#5f9d3e"}}}},"modal":{"styles":{"modal":{"background-color":"#ffffff"}}},"option":{"styles":{"label":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","color":"#4c4c4c"},"select":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","color":"#4c4c4c"}}}}
        });
        //]]>
        
        //<![CDATA[
        var client = ShopifyBuy.buildClient({
          domain: 'phenoh-store.myshopify.com',
          apiKey: '9709cb696a79e4e2e5437b4fb08e7bd1',
          appId: '6',
        });
        var ui = ShopifyBuy.UI.init(client);
        ui.createComponent('product', {
          id: [4140024582],
          node: document.getElementById('product-component-5af59eeaa60'),
          moneyFormat: '${{amount}}',
          options: {"product":{"buttonDestination":"cart","layout":"vertical","variantId":"all","width":"280px","contents":{"img":true,"title":true,"variantTitle":false,"options":true,"price":true,"description":false,"buttonWithQuantity":false,"button":true,"quantity":false},"text":{"button":"ADD TO CART"},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%"}},"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"15px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"variantTitle":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"title":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","font-size":"16px","color":"#4c4c4c"},"description":{"color":"#4c4c4c","font-size":"14px","font-family":"Helvetica Neue, sans-serif"},"price":{"font-family":"Helvetica Neue, sans-serif","font-size":"18px","color":"#4c4c4c"},"quantityInput":{"font-size":"16px","padding-top":"16px","padding-bottom":"16px","color":"#4c4c4c"},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"title":true,"lineItems":true,"footer":true,"button":true},"text":{"title":"Cart","total":"Total","notice":"Shipping and discount codes are added at checkout.","button":"CHECKOUT"},"styles":{"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"16px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"cart":{"background-color":"#ffffff"},"footer":{"background-color":"#ffffff"},"title":{"color":"#4c4c4c"},"close":{":hover":{}}}},"modalProduct":{"contents":{"img":true,"title":true,"variantTitle":false,"options":true,"price":true,"description":true,"buttonWithQuantity":false,"button":true,"quantity":false},"text":{"button":"ADD TO CART"},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%"}},"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"15px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"variantTitle":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"title":{"font-family":"Helvetica Neue, sans-serif","font-size":"26px","color":"#4c4c4c"},"description":{"color":"#4c4c4c","font-size":"14px","font-family":"Helvetica Neue, sans-serif"},"price":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"quantityInput":{"font-size":"16px","padding-top":"16px","padding-bottom":"16px","color":"#4c4c4c"}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},"toggle":{"styles":{"toggle":{"font-family":"Helvetica Neue, sans-serif","background-color":"#78b657",":hover":{"background-color":"#5f9d3e"}}}},"modal":{"styles":{"modal":{"background-color":"#ffffff"}}},"option":{"styles":{"label":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","color":"#4c4c4c"},"select":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","color":"#4c4c4c"}}}}
        });
        //]]>
        
        /*<![CDATA[*/

        (function () {
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            }
          }

          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'phenoh-store.myshopify.com',
              apiKey: '91a7307236aad7a08503e452d507617d',
              appId: '6',
            });

            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: [9114499462],
                node: document.getElementById('product-component-85808aef6e5'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
          "product": {
            "layout": "horizontal",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "variantTitle": false,
              "description": true,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "title": {
                "font-weight": "normal",
                "font-size": "16px"
              },
              "price": {
                "font-size": "18px"
              },
              "quantityInput": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "compareAt": {
                "font-size": "15px"
              }
            }
          },
          "cart": {
            "contents": {
              "button": true
            },
            "text": {
              "total": "Total"
            },
            "styles": {
              "button": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            }
          },
          "modalProduct": {
            "contents": {
              "variantTitle": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "title": {
                "font-weight": "normal"
              },
              "price": {
                "font-size": "14px"
              },
              "quantityInput": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              }
            }
          },
          "toggle": {
            "styles": {
              "count": {
                "font-size": "15px"
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
              });
            });
          }
        })();
        /*]]>*/
        
        /*<![CDATA[*/

        (function () {
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            }
          }

          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'phenoh-store.myshopify.com',
              apiKey: '91a7307236aad7a08503e452d507617d',
              appId: '6',
            });

            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: [9114484614],
                node: document.getElementById('product-component-8580be17067'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
          "product": {
            "layout": "horizontal",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "variantTitle": false,
              "description": true,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "title": {
                "font-weight": "normal",
                "font-size": "16px"
              },
              "price": {
                "font-size": "18px"
              },
              "quantityInput": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "compareAt": {
                "font-size": "15px"
              }
            }
          },
          "cart": {
            "contents": {
              "button": true
            },
            "text": {
              "total": "Total"
            },
            "styles": {
              "button": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            }
          },
          "modalProduct": {
            "contents": {
              "variantTitle": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "title": {
                "font-weight": "normal"
              },
              "price": {
                "font-size": "14px"
              },
              "quantityInput": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              }
            }
          },
          "toggle": {
            "styles": {
              "count": {
                "font-size": "15px"
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
              });
            });
          }
        })();
        /*]]>*/
        
        /*<![CDATA[*/

        (function () {
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            }
          }

          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'phenoh-store.myshopify.com',
              apiKey: '91a7307236aad7a08503e452d507617d',
              appId: '6',
            });

            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: [9114451590],
                node: document.getElementById('product-component-d51281167c2'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
          "product": {
            "variantId": "all",
            "width": "240px",
            "contents": {
              "variantTitle": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "title": {
                "font-weight": "normal",
                "font-size": "16px"
              },
              "price": {
                "font-size": "18px"
              },
              "quantityInput": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "compareAt": {
                "font-size": "15.299999999999999px"
              }
            }
          },
          "cart": {
            "contents": {
              "button": true
            },
            "text": {
              "total": "Total"
            },
            "styles": {
              "button": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            }
          },
          "modalProduct": {
            "contents": {
              "variantTitle": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              },
              "title": {
                "font-weight": "normal"
              },
              "price": {
                "font-size": "14px"
              },
              "quantityInput": {
                "font-size": "15px",
                "padding-top": "15.5px",
                "padding-bottom": "15.5px"
              }
            }
          },
          "toggle": {
            "styles": {
              "count": {
                "font-size": "15px"
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
              });
            });
          }
        })();
        /*]]>*/
    }, 1000);
});
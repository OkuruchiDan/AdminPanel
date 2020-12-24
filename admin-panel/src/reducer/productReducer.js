import {GET_PRODUCT, LOGIN} from "../action-types";

const initialState = {
    products: [
        {
            "ID": "1115707",
            "Model": "S71LB0637S30342",
            "Variant": "470",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Trousers",
            "Code": "S71LB0637S30342470",
            "Color": "Denim",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S71LB0637S30342470.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S71LB0637S30342470.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S71LB0637S30342470_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S71LB0637S30342470_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S71LB0637S30342470_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S71LB0637S30342470_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200450607989", "Size": "M", "Qty": "0" },
                { "Barcode": "211342628458", "Size": "S", "Qty": "0" },
                { "Barcode": "200840977469", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "3300,00",
                    "BrandReferencePriceExVAT": "2704,92",
                    "Discount": "48",
                    "NetPrice": "1406,56",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115708",
            "Model": "553663J160U",
            "Variant": "8552",
            "Season": "AI19",
            "Brand": "Alexander McQueen",
            "Category": "Bijoux",
            "Code": "553663J160U8552",
            "Color": "Argento",
            "Composition": "100% BRASS / 100% SWAROVSKI ",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ALEXANDER McQUEEN---553663J160U8552_1-D0.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ALEXANDER McQUEEN---553663J160U8552_1-D0.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ALEXANDER McQUEEN---553663J160U8552_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ALEXANDER McQUEEN---553663J160U8552_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ALEXANDER McQUEEN---553663J160U8552_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ALEXANDER McQUEEN---553663J160U8552_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201619976832", "Size": "M", "Qty": "0" },
                { "Barcode": "211056936539", "Size": "S", "Qty": "0" },
                { "Barcode": "211447306018", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "950,00",
                    "BrandReferencePriceExVAT": "778,69",
                    "Discount": "48",
                    "NetPrice": "404,92",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115709",
            "Model": "550499J160K",
            "Variant": "7295",
            "Season": "AI19",
            "Brand": "Alexander McQueen",
            "Category": "Bijoux",
            "Code": "550499J160K7295",
            "Color": "Oro",
            "Composition": "100% BRASS ",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Alexander McQueen---550499J160K7295.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Alexander McQueen---550499J160K7295.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Alexander McQueen---550499J160K7295_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Alexander McQueen---550499J160K7295_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211887827833", "Size": "M/L", "Qty": "0" },
                { "Barcode": "211497458353", "Size": "XS/S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "0,00",
                    "BrandReferencePriceExVAT": "0,00",
                    "Discount": "",
                    "NetPrice": "0,00",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115710",
            "Model": "WEL6L2W1111",
            "Variant": "ZOO00",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Bijoux",
            "Code": "WEL6L2W1111ZOO00",
            "Color": "Bianco",
            "Composition": "Synthetic->Resin20 % Stones & Gems->glass20 % Metals & Alloys->Brass60 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---WEL6L2W1111ZOO00.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---WEL6L2W1111ZOO00.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---WEL6L2W1111ZOO00_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---WEL6L2W1111ZOO00_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210431027474", "Size": "M", "Qty": "0" },
                { "Barcode": "200995807364", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "895,00",
                    "BrandReferencePriceExVAT": "733,61",
                    "Discount": "48",
                    "NetPrice": "381,48",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115711",
            "Model": "WEL6L3W1111",
            "Variant": "ZOO00",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Bijoux",
            "Code": "WEL6L3W1111ZOO00",
            "Color": "Oro",
            "Composition": "Synthetic->Enamel 30 % Stones & Gems->glass20 % Metals & Alloys->Brass50 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---WEL6L3W1111ZOO00.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---WEL6L3W1111ZOO00.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---WEL6L3W1111ZOO00_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---WEL6L3W1111ZOO00_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201929376486", "Size": "M", "Qty": "0" },
                { "Barcode": "210494156380", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "475,00",
                    "BrandReferencePriceExVAT": "389,34",
                    "Discount": "48",
                    "NetPrice": "202,46",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115712",
            "Model": "WNL6L2W1111",
            "Variant": "ZOO00",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Bijoux",
            "Code": "WNL6L2W1111ZOO00",
            "Color": "Oro",
            "Composition": "Synthetic->Resin20 % Stones & Gems->glass20 % Metals & Alloys->Brass60 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---WNL6L2W1111ZOO00.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---WNL6L2W1111ZOO00.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---WNL6L2W1111ZOO00_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---WNL6L2W1111ZOO00_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211100484927", "Size": "M", "Qty": "0" },
                { "Barcode": "210710115447", "Size": "S", "Qty": "0" },
                { "Barcode": "200535705033", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "650,00",
                    "BrandReferencePriceExVAT": "532,79",
                    "Discount": "48",
                    "NetPrice": "277,05",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115713",
            "Model": "BE1315AK861",
            "Variant": "80999",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Belts",
            "Code": "BE1315AK86180999",
            "Color": "Nero",
            "Composition": "Pelle 100%",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BE1315AK86180999.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BE1315AK86180999.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BE1315AK86180999_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BE1315AK86180999_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211272895606", "Size": "M", "Qty": "0" },
                { "Barcode": "210882526126", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "550,00",
                    "BrandReferencePriceExVAT": "450,82",
                    "Discount": "48",
                    "NetPrice": "234,43",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115714",
            "Model": "BE1315AK861",
            "Variant": "80412",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Belts",
            "Code": "BE1315AK86180412",
            "Color": "Rosa",
            "Composition": "Pelle",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BE1315AK86180412.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BE1315AK86180412.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BE1315AK86180412_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BE1315AK86180412_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210053634565", "Size": "M", "Qty": "0" },
                { "Barcode": "211663265086", "Size": "S", "Qty": "0" },
                { "Barcode": "201488854672", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "530,00",
                    "BrandReferencePriceExVAT": "434,43",
                    "Discount": "48",
                    "NetPrice": "225,90",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115715",
            "Model": "CG0332AA137",
            "Variant": "HFKK8",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "With Heel",
            "Code": "CG0332AA137HFKK8",
            "Color": "Rosa",
            "Composition": "Synthetic->Satin100 % Furs & Skins->Leather100 % Furs & Skins->Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CG0332AA137HFKK8.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CG0332AA137HFKK8.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CG0332AA137HFKK8_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CG0332AA137HFKK8_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dolce () Gabbana---CG0332AA137HFKK8_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dolce () Gabbana---CG0332AA137HFKK8_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CG0332AA137HFKK8_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CG0332AA137HFKK8_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201316443993", "Size": "M", "Qty": "0" },
                { "Barcode": "200926074513", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "695,00",
                    "BrandReferencePriceExVAT": "569,67",
                    "Discount": "48",
                    "NetPrice": "296,23",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115716",
            "Model": "CQ0287AA137",
            "Variant": "HNKK8",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Flat shoes",
            "Code": "CQ0287AA137HNKK8",
            "Color": "Nero",
            "Composition": "Synthetic->Spandex/Elastane2 % Synthetic->Polyester30 % Natural (other)->Silk58 % Natural (other)->Rubber100 % Furs & Skins->Leather100 % Furs & Skins->Calf Leather10 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CQ0287AA137HNKK8.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CQ0287AA137HNKK8.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CQ0287AA137HNKK8_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CQ0287AA137HNKK8_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CQ0287AA137HNKK8_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CQ0287AA137HNKK8_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201142033581", "Size": "M", "Qty": "0" },
                { "Barcode": "201706813473", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "498,00",
                    "BrandReferencePriceExVAT": "408,20",
                    "Discount": "48",
                    "NetPrice": "212,26",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115717",
            "Model": "CK1595AA712",
            "Variant": "HNKK8",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Sneakers",
            "Code": "CK1595AA712HNKK8",
            "Color": "Nero",
            "Composition": "Synthetic->Polyester100 % Synthetic->Polyester100 % Natural (other)->Rubber100 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CK1595AA712HNKK8.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CK1595AA712HNKK8.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CK1595AA712HNKK8_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CK1595AA712HNKK8_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dolce () Gabbana---CK1595AA712HNKK8_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dolce () Gabbana---CK1595AA712HNKK8_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CK1595AA712HNKK8_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CK1595AA712HNKK8_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210651834505", "Size": "100", "Qty": "0" },
                { "Barcode": "211655136478", "Size": "60", "Qty": "0" },
                { "Barcode": "200763116010", "Size": "70", "Qty": "0" },
                { "Barcode": "211871095546", "Size": "80", "Qty": "0" },
                { "Barcode": "210261465025", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "475,00",
                    "BrandReferencePriceExVAT": "389,34",
                    "Discount": "48",
                    "NetPrice": "202,46",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115718",
            "Model": "EE5665",
            "Variant": "WHT/CONAVY/GUM3",
            "Season": "AI19",
            "Brand": "Adidas",
            "Category": "Sneakers",
            "Code": "EE5665WHT/CONAVY/GUM3",
            "Color": "Bianco",
            "Composition": "Synthetic->Polyurethane100 % Synthetic->Polyurethane100 % Synthetic->Polyester100 % Synthetic->Polyester100 % Natural (other)->Rubber100 %",
            "SizeAndFit": " ",
            "MadeIn": "Vietnam",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE5665WHT()CONAVY()GUM3.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE5665WHT()CONAVY()GUM3.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE5665WHT()CONAVY()GUM3_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE5665WHT()CONAVY()GUM3_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE5665WHT()CONAVY()GUM3_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE5665WHT()CONAVY()GUM3_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210932594517", "Size": "50", "Qty": "0" },
                { "Barcode": "211135947187", "Size": "55", "Qty": "0" },
                { "Barcode": "200389394873", "Size": "60", "Qty": "0" },
                { "Barcode": "201824614981", "Size": "65", "Qty": "0" },
                { "Barcode": "211497374409", "Size": "70", "Qty": "0" },
                { "Barcode": "210768331492", "Size": "75", "Qty": "0" },
                { "Barcode": "200214984461", "Size": "80", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "0,00",
                    "BrandReferencePriceExVAT": "0,00",
                    "Discount": "",
                    "NetPrice": "0,00",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115719",
            "Model": "EE5785",
            "Variant": "WHT/CBLACK/GOLDMT",
            "Season": "AI19",
            "Brand": "Adidas",
            "Category": "Sneakers",
            "Code": "EE5785WHT/CBLACK/GOLDMT",
            "Color": "Bianco",
            "Composition": "Natural (other)->Rubber100 % Furs & Skins->Leather100 % Furs & Skins->Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "China",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE5785WHT()CBLACK()GOLDMT.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE5785WHT()CBLACK()GOLDMT.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE5785WHT()CBLACK()GOLDMT_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE5785WHT()CBLACK()GOLDMT_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE5785WHT()CBLACK()GOLDMT_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE5785WHT()CBLACK()GOLDMT_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201948295865", "Size": "100", "Qty": "0" },
                { "Barcode": "200122706276", "Size": "60", "Qty": "0" },
                { "Barcode": "201557926385", "Size": "70", "Qty": "0" },
                { "Barcode": "211230685812", "Size": "80", "Qty": "0" },
                { "Barcode": "211040988087", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "695,00",
                    "BrandReferencePriceExVAT": "569,67",
                    "Discount": "48",
                    "NetPrice": "296,23",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115720",
            "Model": "EF9113",
            "Variant": "CBLACK/CBLACK/FTWWHT",
            "Season": "AI19",
            "Brand": "Adidas",
            "Category": "Sneakers",
            "Code": "EF9113CBLACK/CBLACK/FTWWHT",
            "Color": "Nero",
            "Composition": "100% LEATHER 100% NYLON ",
            "SizeAndFit": " ",
            "MadeIn": "Vietnam",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF9113CBLACK()CBLACK()FTWWHT.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF9113CBLACK()CBLACK()FTWWHT.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF9113CBLACK()CBLACK()FTWWHT_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF9113CBLACK()CBLACK()FTWWHT_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF9113CBLACK()CBLACK()FTWWHT_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF9113CBLACK()CBLACK()FTWWHT_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211115358460", "Size": "50", "Qty": "0" },
                { "Barcode": "210545689397", "Size": "55", "Qty": "0" },
                { "Barcode": "200473202589", "Size": "60", "Qty": "0" },
                { "Barcode": "211654881120", "Size": "65", "Qty": "0" },
                { "Barcode": "211982121694", "Size": "70", "Qty": "0" },
                { "Barcode": "211416442419", "Size": "75", "Qty": "0" },
                { "Barcode": "211713333477", "Size": "80", "Qty": "0" },
                { "Barcode": "210178073702", "Size": "85", "Qty": "0" },
                { "Barcode": "210641435625", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "475,00",
                    "BrandReferencePriceExVAT": "389,34",
                    "Discount": "48",
                    "NetPrice": "202,46",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115721",
            "Model": "EF9288",
            "Variant": "WHT/VAPPNK/OWHITE",
            "Season": "AI19",
            "Brand": "Adidas",
            "Category": "Sneakers",
            "Code": "EF9288WHT/VAPPNK/OWHITE",
            "Color": "Bianco",
            "Composition": "100% LEATHER ",
            "SizeAndFit": " ",
            "MadeIn": "China",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF9288WHT()VAPPNK()OWHITE.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF9288WHT()VAPPNK()OWHITE.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF9288WHT()VAPPNK()OWHITE_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF9288WHT()VAPPNK()OWHITE_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF9288WHT()VAPPNK()OWHITE_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF9288WHT()VAPPNK()OWHITE_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201056275398", "Size": "100", "Qty": "0" },
                { "Barcode": "201408603787", "Size": "60", "Qty": "0" },
                { "Barcode": "200665905918", "Size": "70", "Qty": "0" },
                { "Barcode": "201776219482", "Size": "80", "Qty": "0" },
                { "Barcode": "210670936063", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "595,00",
                    "BrandReferencePriceExVAT": "487,70",
                    "Discount": "48",
                    "NetPrice": "253,61",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115722",
            "Model": "EF1963",
            "Variant": "BLUTIN/LTAQUA/ASHGRE",
            "Season": "AI19",
            "Brand": "Adidas",
            "Category": "Sneakers",
            "Code": "EF1963BLUTIN/LTAQUA/ASHGRE",
            "Color": "Azzurro",
            "Composition": "100% LEATHER ",
            "SizeAndFit": " ",
            "MadeIn": "Vietnam",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF1963BLUTIN()LTAQUA()ASHGRE.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF1963BLUTIN()LTAQUA()ASHGRE.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF1963BLUTIN()LTAQUA()ASHGRE_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF1963BLUTIN()LTAQUA()ASHGRE_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF1963BLUTIN()LTAQUA()ASHGRE_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF1963BLUTIN()LTAQUA()ASHGRE_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201211682488", "Size": "50", "Qty": "0" },
                { "Barcode": "200250560494", "Size": "55", "Qty": "0" },
                { "Barcode": "200821313008", "Size": "60", "Qty": "0" },
                { "Barcode": "201882944805", "Size": "65", "Qty": "0" },
                { "Barcode": "210303645629", "Size": "70", "Qty": "0" },
                { "Barcode": "201064288967", "Size": "75", "Qty": "0" },
                { "Barcode": "201538923062", "Size": "80", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "475,00",
                    "BrandReferencePriceExVAT": "389,34",
                    "Discount": "48",
                    "NetPrice": "202,46",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115723",
            "Model": "EF1964",
            "Variant": "ECRTINI/CEPNK/TRUPNK",
            "Season": "AI19",
            "Brand": "Adidas",
            "Category": "Sneakers",
            "Code": "EF1964ECRTINI/CEPNK/TRUPNK",
            "Color": "Rosa",
            "Composition": "Synthetic->Polyester100 % Synthetic->Polyester100 % Natural (other)->Rubber100 % Furs & Skins->Suede100 % Furs & Skins->Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "Vietnam",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF1964ECRTINI()CEPNK()TRUPNK.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF1964ECRTINI()CEPNK()TRUPNK.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF1964ECRTINI()CEPNK()TRUPNK_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF1964ECRTINI()CEPNK()TRUPNK_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EF1964ECRTINI()CEPNK()TRUPNK_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EF1964ECRTINI()CEPNK()TRUPNK_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211182964705", "Size": "50", "Qty": "0" },
                { "Barcode": "201292687015", "Size": "55", "Qty": "0" },
                { "Barcode": "201220200209", "Size": "60", "Qty": "0" },
                { "Barcode": "201929292542", "Size": "65", "Qty": "0" },
                { "Barcode": "211587815912", "Size": "70", "Qty": "0" },
                { "Barcode": "201602051968", "Size": "75", "Qty": "0" },
                { "Barcode": "210557455626", "Size": "80", "Qty": "0" },
                { "Barcode": "200319662022", "Size": "85", "Qty": "0" },
                { "Barcode": "211037272078", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "498,00",
                    "BrandReferencePriceExVAT": "408,20",
                    "Discount": "48",
                    "NetPrice": "212,26",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115724",
            "Model": "EE6371",
            "Variant": "WHT/CWHITE",
            "Season": "AI19",
            "Brand": "Adidas",
            "Category": "Sneakers",
            "Code": "EE6371WHT/CWHITE",
            "Color": "Bianco",
            "Composition": "Synthetic->Polyester100 % Synthetic->Other fibres100 % Natural (other)->Rubber100 % Furs & Skins->Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "Vietnam",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE6371WHT()CWHITE.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE6371WHT()CWHITE.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE6371WHT()CWHITE_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE6371WHT()CWHITE_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE6371WHT()CWHITE_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE6371WHT()CWHITE_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210369310390", "Size": "50", "Qty": "0" },
                { "Barcode": "210465141304", "Size": "55", "Qty": "0" },
                { "Barcode": "210249182237", "Size": "60", "Qty": "0" },
                { "Barcode": "211684402345", "Size": "65", "Qty": "0" },
                { "Barcode": "201694799570", "Size": "70", "Qty": "0" },
                { "Barcode": "201357161769", "Size": "75", "Qty": "0" },
                { "Barcode": "200664439284", "Size": "80", "Qty": "0" },
                { "Barcode": "210792381879", "Size": "85", "Qty": "0" },
                { "Barcode": "211399670676", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "550,00",
                    "BrandReferencePriceExVAT": "450,82",
                    "Discount": "48",
                    "NetPrice": "234,43",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115725",
            "Model": "BE08143004",
            "Variant": "001",
            "Season": "AI19",
            "Brand": "Givenchy",
            "Category": "Boots",
            "Code": "BE08143004001",
            "Color": "Nero",
            "Composition": "Furs & Skins->Leather100 % Furs & Skins->Leather100 % Furs & Skins->Calf Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BE08143004001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BE08143004001.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BE08143004001_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BE08143004001_1_D.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BE08143004001_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BE08143004001_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211286494347", "Size": "50", "Qty": "0" },
                { "Barcode": "211633767195", "Size": "55", "Qty": "0" },
                { "Barcode": "200135418180", "Size": "60", "Qty": "0" },
                { "Barcode": "201570638288", "Size": "65", "Qty": "0" },
                { "Barcode": "210979599229", "Size": "70", "Qty": "0" },
                { "Barcode": "211243397715", "Size": "75", "Qty": "0" },
                { "Barcode": "211949238943", "Size": "80", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "595,00",
                    "BrandReferencePriceExVAT": "487,70",
                    "Discount": "48",
                    "NetPrice": "253,61",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115726",
            "Model": "A60216A1203",
            "Variant": "80999",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Boots",
            "Code": "A60216A120380999",
            "Color": "Nero",
            "Composition": "Pelle",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dolce () Gabbana---A60216A120380999.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dolce () Gabbana---A60216A120380999.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dolce () Gabbana---A60216A120380999_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dolce () Gabbana---A60216A120380999_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dolce () Gabbana---A60216A120380999_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dolce () Gabbana---A60216A120380999_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201801793631", "Size": "50", "Qty": "0" },
                { "Barcode": "200908222175", "Size": "55", "Qty": "0" },
                { "Barcode": "200845093269", "Size": "60", "Qty": "0" },
                { "Barcode": "210517852697", "Size": "65", "Qty": "0" },
                { "Barcode": "210464538223", "Size": "70", "Qty": "0" },
                { "Barcode": "210809055763", "Size": "75", "Qty": "0" },
                { "Barcode": "201235462749", "Size": "80", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "630,00",
                    "BrandReferencePriceExVAT": "516,39",
                    "Discount": "48",
                    "NetPrice": "268,52",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115727",
            "Model": "CS1587AH527",
            "Variant": "8B979",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Sneakers",
            "Code": "CS1587AH5278B979",
            "Color": "Nero",
            "Composition": "100% CALF",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CS1587AH5278B979.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CS1587AH5278B979.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CS1587AH5278B979_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CS1587AH5278B979_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---CS1587AH5278B979_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---CS1587AH5278B979_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211375412894", "Size": "50", "Qty": "0" },
                { "Barcode": "200247439625", "Size": "55", "Qty": "0" },
                { "Barcode": "211159453827", "Size": "60", "Qty": "0" },
                { "Barcode": "201877063879", "Size": "65", "Qty": "0" },
                { "Barcode": "211549823307", "Size": "70", "Qty": "0" },
                { "Barcode": "200267433359", "Size": "75", "Qty": "0" },
                { "Barcode": "210910184217", "Size": "80", "Qty": "0" },
                { "Barcode": "200657802838", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "575,00",
                    "BrandReferencePriceExVAT": "471,31",
                    "Discount": "48",
                    "NetPrice": "245,08",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115728",
            "Model": "A10465A1203",
            "Variant": "80999",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Flat shoes",
            "Code": "A10465A120380999",
            "Color": "Nero",
            "Composition": "Synthetic->Polyester100 % Furs & Skins->Leather100 % Furs & Skins->Leather100 % Furs & Skins->Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---A10465A120380999.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---A10465A120380999.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---A10465A120380999_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---A10465A120380999_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dolce () Gabbana---A10465A120380999_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dolce () Gabbana---A10465A120380999_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---A10465A120380999_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---A10465A120380999_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200304823416", "Size": "40", "Qty": "1" },
                { "Barcode": "211348373094", "Size": "42", "Qty": "1" },
                { "Barcode": "210465334135", "Size": "44", "Qty": "1" },
                { "Barcode": "210088561464", "Size": "46", "Qty": "1" },
                { "Barcode": "200035967984", "Size": "48", "Qty": "1" },
                { "Barcode": "210608466468", "Size": "50", "Qty": "1" },
                { "Barcode": "211501546060", "Size": "50", "Qty": "1" },
                { "Barcode": "200894158385", "Size": "60", "Qty": "2" },
                { "Barcode": "200719747973", "Size": "70", "Qty": "2" },
                { "Barcode": "201110117453", "Size": "80", "Qty": "0" },
                { "Barcode": "201500486933", "Size": "90", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "310,00",
                    "BrandReferencePriceExVAT": "254,10",
                    "Discount": "48",
                    "NetPrice": "132,13",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115729",
            "Model": "BB6652AV967",
            "Variant": "80999",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Bags..",
            "Code": "BB6652AV96780999",
            "Color": "Nero",
            "Composition": "Pelle",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV96780999.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV96780999.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV96780999_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV96780999_1_D.jpg"
                },
                {
                    "No": "7",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV96780999_6_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV96780999_6_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201509873645", "Size": "50", "Qty": "0" },
                { "Barcode": "201947417728", "Size": "55", "Qty": "0" },
                { "Barcode": "201293914578", "Size": "60", "Qty": "0" },
                { "Barcode": "210729134688", "Size": "65", "Qty": "0" },
                { "Barcode": "201119504166", "Size": "70", "Qty": "0" },
                { "Barcode": "200977778014", "Size": "75", "Qty": "0" },
                { "Barcode": "210792263593", "Size": "80", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "310,00",
                    "BrandReferencePriceExVAT": "254,10",
                    "Discount": "48",
                    "NetPrice": "132,13",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115730",
            "Model": "BB6651AV967",
            "Variant": "87124",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Bags..",
            "Code": "BB6651AV96787124",
            "Color": "Rosso",
            "Composition": "Pelle 100%",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6651AV96787124.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6651AV96787124.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6651AV96787124_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6651AV96787124_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6651AV96787124_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6651AV96787124_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200876159737", "Size": "60", "Qty": "0" },
                { "Barcode": "210979917164", "Size": "65", "Qty": "0" },
                { "Barcode": "211593769794", "Size": "70", "Qty": "0" },
                { "Barcode": "201347532857", "Size": "75", "Qty": "0" },
                { "Barcode": "211266529219", "Size": "80", "Qty": "0" },
                { "Barcode": "200317172571", "Size": "85", "Qty": "0" },
                { "Barcode": "211984139273", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1550,00",
                    "BrandReferencePriceExVAT": "1270,49",
                    "Discount": "48",
                    "NetPrice": "660,66",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115731",
            "Model": "BB6652AV967",
            "Variant": "80740",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Bags..",
            "Code": "BB6652AV96780740",
            "Color": "Tortora",
            "Composition": "Pelle",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV96780740.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV96780740.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV96780740_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV96780740_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV96780740_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV96780740_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200684788261", "Size": "60", "Qty": "0" },
                { "Barcode": "211706848726", "Size": "65", "Qty": "0" },
                { "Barcode": "211656898699", "Size": "70", "Qty": "0" },
                { "Barcode": "201654427976", "Size": "75", "Qty": "0" },
                { "Barcode": "211251420919", "Size": "80", "Qty": "0" },
                { "Barcode": "211111296100", "Size": "85", "Qty": "0" },
                { "Barcode": "200519334295", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "790,00",
                    "BrandReferencePriceExVAT": "647,54",
                    "Discount": "48",
                    "NetPrice": "336,72",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115732",
            "Model": "BB6652AV967",
            "Variant": "80412",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Bags..",
            "Code": "BB6652AV96780412",
            "Color": "Rosa",
            "Composition": "Pelle",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV96780412.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV96780412.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV96780412_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV96780412_1_D.jpg"
                },
                {
                    "No": "7",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV96780412_6_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV96780412_6_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "", "Size": "100", "Qty": "0" },
                { "Barcode": "", "Size": "50", "Qty": "0" },
                { "Barcode": "", "Size": "55", "Qty": "0" },
                { "Barcode": "", "Size": "60", "Qty": "0" },
                { "Barcode": "", "Size": "65", "Qty": "0" },
                { "Barcode": "", "Size": "70", "Qty": "0" },
                { "Barcode": "", "Size": "75", "Qty": "0" },
                { "Barcode": "", "Size": "80", "Qty": "0" },
                { "Barcode": "", "Size": "85", "Qty": "0" },
                { "Barcode": "", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1950,00",
                    "BrandReferencePriceExVAT": "1598,36",
                    "Discount": "48",
                    "NetPrice": "831,15",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115733",
            "Model": "BB6652AV967",
            "Variant": "8H062",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Bags..",
            "Code": "BB6652AV9678H062",
            "Color": "Grigio",
            "Composition": "Pelle 100%",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV9678H062.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV9678H062.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV9678H062_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV9678H062_1_D.jpg"
                },
                {
                    "No": "7",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6652AV9678H062_6_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6652AV9678H062_6_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201782862646", "Size": "50", "Qty": "0" },
                { "Barcode": "201392493166", "Size": "55", "Qty": "0" },
                { "Barcode": "211678185087", "Size": "60", "Qty": "0" },
                { "Barcode": "200395795139", "Size": "65", "Qty": "0" },
                { "Barcode": "200786164619", "Size": "70", "Qty": "0" },
                { "Barcode": "200611754206", "Size": "75", "Qty": "0" },
                { "Barcode": "201002123686", "Size": "80", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "830,00",
                    "BrandReferencePriceExVAT": "680,33",
                    "Discount": "48",
                    "NetPrice": "353,77",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115734",
            "Model": "BB6728AV967",
            "Variant": "80740",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Bags..",
            "Code": "BB6728AV96780740",
            "Color": "Tortora",
            "Composition": "Pelle 100%",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6728AV96780740.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6728AV96780740.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6728AV96780740_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6728AV96780740_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6728AV96780740_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6728AV96780740_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201718899224", "Size": "100", "Qty": "0" },
                { "Barcode": "210506242131", "Size": "60", "Qty": "0" },
                { "Barcode": "211614221665", "Size": "65", "Qty": "0" },
                { "Barcode": "210004591145", "Size": "70", "Qty": "0" },
                { "Barcode": "201112570677", "Size": "75", "Qty": "0" },
                { "Barcode": "211830180733", "Size": "80", "Qty": "0" },
                { "Barcode": "210220550212", "Size": "85", "Qty": "0" },
                { "Barcode": "201328529744", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "4900,00",
                    "BrandReferencePriceExVAT": "4016,39",
                    "Discount": "48",
                    "NetPrice": "2088,52",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115735",
            "Model": "BB6704AV967",
            "Variant": "80999",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Bags..",
            "Code": "BB6704AV96780999",
            "Color": "Nero",
            "Composition": "Pelle 100%",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6704AV96780999.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6704AV96780999.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6704AV96780999_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6704AV96780999_1_D.jpg"
                },
                {
                    "No": "7",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6704AV96780999_6_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6704AV96780999_6_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211338601405", "Size": "50", "Qty": "0" },
                { "Barcode": "201840252390", "Size": "55", "Qty": "0" },
                { "Barcode": "210954835871", "Size": "60", "Qty": "0" },
                { "Barcode": "211017964776", "Size": "65", "Qty": "0" },
                { "Barcode": "200125944308", "Size": "70", "Qty": "0" },
                { "Barcode": "201233923842", "Size": "75", "Qty": "0" },
                { "Barcode": "201059513430", "Size": "80", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1750,00",
                    "BrandReferencePriceExVAT": "1434,43",
                    "Discount": "48",
                    "NetPrice": "745,90",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115736",
            "Model": "BB6704AV967",
            "Variant": "80412",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Bags..",
            "Code": "BB6704AV96780412",
            "Color": "Rosa",
            "Composition": "Pelle 100%",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6704AV96780412.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6704AV96780412.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6704AV96780412_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6704AV96780412_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BB6704AV96780412_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BB6704AV96780412_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210528813465", "Size": "50", "Qty": "0" },
                { "Barcode": "210138443985", "Size": "55", "Qty": "0" },
                { "Barcode": "210751376479", "Size": "60", "Qty": "0" },
                { "Barcode": "200424135902", "Size": "65", "Qty": "0" },
                { "Barcode": "211532115438", "Size": "70", "Qty": "0" },
                { "Barcode": "211922484918", "Size": "75", "Qty": "0" },
                { "Barcode": "200640094970", "Size": "80", "Qty": "0" },
                { "Barcode": "201748074504", "Size": "90", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2200,00",
                    "BrandReferencePriceExVAT": "1803,28",
                    "Discount": "48",
                    "NetPrice": "937,70",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115737",
            "Model": "BC4267AA657",
            "Variant": "8B956",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Belts",
            "Code": "BC4267AA6578B956",
            "Color": "Nero",
            "Composition": "Synthetic->Polyester94 % Furs & Skins->Calf Leather6 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BC4267AA6578B956.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BC4267AA6578B956.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BC4267AA6578B956_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BC4267AA6578B956_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211660953890", "Size": "L", "Qty": "0" },
                { "Barcode": "200552974354", "Size": "M", "Qty": "0" },
                { "Barcode": "211444994822", "Size": "S", "Qty": "0" },
                { "Barcode": "210051323369", "Size": "XL", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "790,00",
                    "BrandReferencePriceExVAT": "647,54",
                    "Discount": "48",
                    "NetPrice": "336,72",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115738",
            "Model": "BC4267AA657",
            "Variant": "89697",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Belts",
            "Code": "BC4267AA65789697",
            "Color": "Bianco",
            "Composition": "Furs & Skins->Calf Leather6 % Synthetic->Polyester94 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BC4267AA65789697.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BC4267AA65789697.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BC4267AA65789697_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BC4267AA65789697_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200873610982", "Size": "L", "Qty": "0" },
                { "Barcode": "211765631451", "Size": "M", "Qty": "0" },
                { "Barcode": "200330411340", "Size": "S", "Qty": "0" },
                { "Barcode": "200936739888", "Size": "XL", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1550,00",
                    "BrandReferencePriceExVAT": "1270,49",
                    "Discount": "48",
                    "NetPrice": "660,66",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115739",
            "Model": "BC4217AI935",
            "Variant": "80999",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Belts",
            "Code": "BC4217AI93580999",
            "Color": "Nero",
            "Composition": "Pelle 100%",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BC4217AI93580999.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BC4217AI93580999.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---BC4217AI93580999_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---BC4217AI93580999_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210840556568", "Size": "40", "Qty": "0" },
                { "Barcode": "211405336460", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1790,00",
                    "BrandReferencePriceExVAT": "1467,21",
                    "Discount": "48",
                    "NetPrice": "762,95",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115740",
            "Model": "5508760PY0N",
            "Variant": "1000",
            "Season": "AI19",
            "Brand": "Alexander McQueen",
            "Category": "Belts",
            "Code": "5508760PY0N1000",
            "Color": "Nero",
            "Composition": "Furs & Skins->Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ALEXANDER McQUEEN---5508760PY0N1000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ALEXANDER McQUEEN---5508760PY0N1000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ALEXANDER McQUEEN---5508760PY0N1000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ALEXANDER McQUEEN---5508760PY0N1000_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200886401182", "Size": "40", "Qty": "0" },
                { "Barcode": "201276770662", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "740,00",
                    "BrandReferencePriceExVAT": "606,56",
                    "Discount": "55",
                    "NetPrice": "272,95",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115741",
            "Model": "JUNO/S MWH",
            "Variant": "BLACK/WHITE",
            "Season": "AI19",
            "Brand": "Jimmy Choo",
            "Category": "Bags..",
            "Code": "JUNO/S MWHBLACK/WHITE",
            "Color": "Bianco",
            "Composition": "Synthetic->Polyester15 % Synthetic->Polyamide80 % Natural (Veg)->Cotton85 % Metals & Alloys->Brass5 % Furs & Skins->Lamb Skin10 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---JIMMY CHOO---JUNO()S MWHBLACK()WHITE.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---JIMMY CHOO---JUNO()S MWHBLACK()WHITE.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---JIMMY CHOO---JUNO()S MWHBLACK()WHITE_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---JIMMY CHOO---JUNO()S MWHBLACK()WHITE_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---JIMMY CHOO---JUNO()S MWHBLACK()WHITE_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---JIMMY CHOO---JUNO()S MWHBLACK()WHITE_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200303431655", "Size": "40", "Qty": "0" },
                { "Barcode": "211411411191", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2380,00",
                    "BrandReferencePriceExVAT": "1950,82",
                    "Discount": "55",
                    "NetPrice": "877,87",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115742",
            "Model": "8014631",
            "Variant": "A1189",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Bags..",
            "Code": "8014631A1189",
            "Color": "Nero",
            "Composition": "100% CALF/LINING 100% LAMB ",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8014631A1189.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8014631A1189.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8014631A1189_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8014631A1189_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8014631A1189_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8014631A1189_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210775119677", "Size": "L", "Qty": "0" },
                { "Barcode": "200057509621", "Size": "M", "Qty": "0" },
                { "Barcode": "201667140141", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "195,00",
                    "BrandReferencePriceExVAT": "159,84",
                    "Discount": "55",
                    "NetPrice": "71,93",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115743",
            "Model": "S71GU0312S25305",
            "Variant": "100",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Sweaters",
            "Code": "S71GU0312S25305100",
            "Color": "Bianco",
            "Composition": "100%Cotton ",
            "SizeAndFit": " ",
            "MadeIn": "Portugal ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S71GU0312S25305100.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S71GU0312S25305100.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S71GU0312S25305100_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S71GU0312S25305100_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S71GU0312S25305100_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S71GU0312S25305100_3_P.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "211291427251", "Size": "42", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "310,00",
                    "BrandReferencePriceExVAT": "254,10",
                    "Discount": "55",
                    "NetPrice": "114,34",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115744",
            "Model": "S71GD0800S22844",
            "Variant": "100",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "T-shirts and Polos",
            "Code": "S71GD0800S22844100",
            "Color": "Bianco",
            "Composition": "100%Cotton ",
            "SizeAndFit": " ",
            "MadeIn": "Portugal ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S71GD0800S22844100.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S71GD0800S22844100.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S71GD0800S22844100_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S71GD0800S22844100_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S71GD0800S22844100_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S71GD0800S22844100_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210399406785", "Size": "40", "Qty": "0" },
                { "Barcode": "201507386317", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "435,00",
                    "BrandReferencePriceExVAT": "356,56",
                    "Discount": "48",
                    "NetPrice": "185,41",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115745",
            "Model": "S74GU0348S25305",
            "Variant": "900",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Sweaters",
            "Code": "S74GU0348S25305900",
            "Color": "Nero",
            "Composition": "100%Cotton Secondary fabric: 97%Cotton 3%Elastane ",
            "SizeAndFit": " ",
            "MadeIn": "Portugal ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S74GU0348S25305900.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S74GU0348S25305900.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S74GU0348S25305900_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S74GU0348S25305900_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S74GU0348S25305900_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S74GU0348S25305900_3_P.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "211165489157", "Size": "42", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1790,00",
                    "BrandReferencePriceExVAT": "1467,21",
                    "Discount": "55",
                    "NetPrice": "660,25",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115746",
            "Model": "S71HA0906S16917",
            "Variant": "961",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Sweaters",
            "Code": "S71HA0906S16917961",
            "Color": "Nero",
            "Composition": "87%Wool 10%Viscose 3%Polyamide ",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S71HA0906S16917961.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S71HA0906S16917961.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S71HA0906S16917961_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S71HA0906S16917961_1_D.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S71HA0906S16917961_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S71HA0906S16917961_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200273468688", "Size": "L", "Qty": "0" },
                { "Barcode": "211555858636", "Size": "M", "Qty": "0" },
                { "Barcode": "201883099209", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "48,00",
                    "BrandReferencePriceExVAT": "39,34",
                    "Discount": "55",
                    "NetPrice": "17,70",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115747",
            "Model": "S74GU0352S25042",
            "Variant": "970",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Sweaters",
            "Code": "S74GU0352S25042970",
            "Color": "Rosso",
            "Composition": "100%Cotton Secondary fabric: 94%Cotton 6%Elastane ",
            "SizeAndFit": " ",
            "MadeIn": "Romania ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S74GU0352S25042970.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S74GU0352S25042970.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S74GU0352S25042970_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S74GU0352S25042970_1_D.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S74GU0352S25042970_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S74GU0352S25042970_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200991078743", "Size": "40", "Qty": "0" },
                { "Barcode": "211381448224", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "195,00",
                    "BrandReferencePriceExVAT": "159,84",
                    "Discount": "55",
                    "NetPrice": "71,93",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115748",
            "Model": "S74GU0353S25042",
            "Variant": "968",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Sweaters",
            "Code": "S74GU0353S25042968",
            "Color": "Nero",
            "Composition": "100%Cotton Secondary fabric: 94%Cotton 6%Elastane",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S74GU0353S25042968.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S74GU0353S25042968.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S74GU0353S25042968_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S74GU0353S25042968_1_D.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---S74GU0353S25042968_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---S74GU0353S25042968_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211771817704", "Size": "40", "Qty": "0" },
                { "Barcode": "210879797238", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "460,00",
                    "BrandReferencePriceExVAT": "377,05",
                    "Discount": "55",
                    "NetPrice": "169,67",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115749",
            "Model": "S74GD0601S22427",
            "Variant": "964X",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "T-shirts and Polos",
            "Code": "S74GD0601S22427964X",
            "Color": "Nero",
            "Composition": "100%Cotton Secondary fabric: 100%Cotton",
            "SizeAndFit": " ",
            "MadeIn": "Romania ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S74GD0601S22427964X.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S74GD0601S22427964X.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S74GD0601S22427964X_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S74GD0601S22427964X_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S74GD0601S22427964X_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S74GD0601S22427964X_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201486320069", "Size": "40", "Qty": "0" },
                { "Barcode": "200029519711", "Size": "42", "Qty": "0" },
                { "Barcode": "200041964179", "Size": "48", "Qty": "0" },
                { "Barcode": "201775376997", "Size": "50", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "195,00",
                    "BrandReferencePriceExVAT": "159,84",
                    "Discount": "55",
                    "NetPrice": "71,93",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115750",
            "Model": "S74GD0563S22427",
            "Variant": "100",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "T-shirts and Polos",
            "Code": "S74GD0563S22427100",
            "Color": "Bianco",
            "Composition": "100%Cotton Secondary fabric: 100%Cotton",
            "SizeAndFit": " ",
            "MadeIn": "Romania ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S74GD0563S22427100.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S74GD0563S22427100.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S74GD0563S22427100_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S74GD0563S22427100_1_D.jpg"
                },
                {
                    "No": "7",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S74GD0563S22427100_6_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S74GD0563S22427100_6_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210436977930", "Size": "40", "Qty": "0" },
                { "Barcode": "211217716889", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "105,00",
                    "BrandReferencePriceExVAT": "86,07",
                    "Discount": "55",
                    "NetPrice": "38,73",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115751",
            "Model": "S74GD0594S22507",
            "Variant": "900",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "T-shirts and Polos",
            "Code": "S74GD0594S22507900",
            "Color": "Nero",
            "Composition": "100%Cotton Secondary fabric: 100%Cotton",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S74GD0594S22507900.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S74GD0594S22507900.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S74GD0594S22507900_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S74GD0594S22507900_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S74GD0594S22507900_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S74GD0594S22507900_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200603273999", "Size": "L", "Qty": "0" },
                { "Barcode": "200212904520", "Size": "M", "Qty": "0" },
                { "Barcode": "211104924988", "Size": "S", "Qty": "0" },
                { "Barcode": "201711253533", "Size": "XL", "Qty": "0" },
                { "Barcode": "210101623015", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2130,00",
                    "BrandReferencePriceExVAT": "1745,90",
                    "Discount": "55",
                    "NetPrice": "785,66",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115752",
            "Model": "8015139",
            "Variant": "A1189",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Bags..",
            "Code": "8015139A1189",
            "Color": "Nero",
            "Composition": "Metals & Alloys->metal100 % Furs & Skins->Lamb Skin100 % Furs & Skins->Goat Skin100 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8015139A1189.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8015139A1189.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8015139A1189_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8015139A1189_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8015139A1189_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8015139A1189_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201051450283", "Size": "L", "Qty": "0" },
                { "Barcode": "211616230177", "Size": "M", "Qty": "0" },
                { "Barcode": "210835491217", "Size": "S", "Qty": "0" },
                { "Barcode": "211441819765", "Size": "XL", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1820,00",
                    "BrandReferencePriceExVAT": "1491,80",
                    "Discount": "55",
                    "NetPrice": "671,31",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115753",
            "Model": "8014595",
            "Variant": "A7397",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Bags..",
            "Code": "8014595A7397",
            "Color": "Rosso",
            "Composition": "Furs & Skins->Lamb Skin100 % Furs & Skins->Goat Skin100 % Furs & Skins->Goat Skin100 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8014595A7397.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8014595A7397.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8014595A7397_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8014595A7397_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8014595A7397_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8014595A7397_3_P.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "210064375921", "Size": "UNICA", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "195,00",
                    "BrandReferencePriceExVAT": "159,84",
                    "Discount": "55",
                    "NetPrice": "71,93",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115754",
            "Model": "BO017419A006S",
            "Variant": "50TA",
            "Season": "AI19",
            "Brand": "Isabel Marant",
            "Category": "Boots",
            "Code": "BO017419A006S50TA",
            "Color": "Beige",
            "Composition": "100% CALF",
            "SizeAndFit": " ",
            "MadeIn": "Portogallo",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Isabel Marant---BO017419A006S50TA.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Isabel Marant---BO017419A006S50TA.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Isabel Marant---BO017419A006S50TA_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Isabel Marant---BO017419A006S50TA_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Isabel Marant---BO017419A006S50TA_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Isabel Marant---BO017419A006S50TA_2_D.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "201172355453", "Size": "S", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "195,00",
                    "BrandReferencePriceExVAT": "159,84",
                    "Discount": "55",
                    "NetPrice": "71,93",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115755",
            "Model": "BO017419A008S",
            "Variant": "01BK",
            "Season": "AI19",
            "Brand": "Isabel Marant",
            "Category": "Boots",
            "Code": "BO017419A008S01BK",
            "Color": "Nero",
            "Composition": "100% CALF",
            "SizeAndFit": " ",
            "MadeIn": "Portogallo",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ISABEL MARANT---BO017419A008S01BK.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ISABEL MARANT---BO017419A008S01BK.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ISABEL MARANT---BO017419A008S01BK_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ISABEL MARANT---BO017419A008S01BK_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ISABEL MARANT---BO017419A008S01BK_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ISABEL MARANT---BO017419A008S01BK_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211209602549", "Size": "I", "Qty": "0" },
                { "Barcode": "211599972029", "Size": "II", "Qty": "0" },
                { "Barcode": "200700073840", "Size": "L", "Qty": "0" },
                { "Barcode": "201243273482", "Size": "M", "Qty": "0" },
                { "Barcode": "201919334880", "Size": "XL", "Qty": "0" },
                { "Barcode": "211201724828", "Size": "XXL", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "825,00",
                    "BrandReferencePriceExVAT": "676,23",
                    "Discount": "55",
                    "NetPrice": "304,30",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115756",
            "Model": "BO016419A047S",
            "Variant": "01BK",
            "Season": "AI19",
            "Brand": "Isabel Marant",
            "Category": "Boots",
            "Code": "BO016419A047S01BK",
            "Color": "Nero",
            "Composition": "100% CALF",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Isabel Marant---BO016419A047S01BK.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Isabel Marant---BO016419A047S01BK.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Isabel Marant---BO016419A047S01BK_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Isabel Marant---BO016419A047S01BK_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Isabel Marant---BO016419A047S01BK_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Isabel Marant---BO016419A047S01BK_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200533541148", "Size": "L", "Qty": "0" },
                { "Barcode": "211425561616", "Size": "M", "Qty": "0" },
                { "Barcode": "211035192136", "Size": "S", "Qty": "0" },
                { "Barcode": "200923910628", "Size": "XL", "Qty": "0" },
                { "Barcode": "210031890163", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2745,00",
                    "BrandReferencePriceExVAT": "2250,00",
                    "Discount": "55",
                    "NetPrice": "1012,50",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115757",
            "Model": "BT007219A008S",
            "Variant": "01BK",
            "Season": "AI19",
            "Brand": "Isabel Marant",
            "Category": "Boots",
            "Code": "BT007219A008S01BK",
            "Color": "Nero",
            "Composition": "100% CALF",
            "SizeAndFit": " ",
            "MadeIn": "Portogallo",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ISABEL MARANT---BT007219A008S01BK.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ISABEL MARANT---BT007219A008S01BK.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ISABEL MARANT---BT007219A008S01BK_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ISABEL MARANT---BT007219A008S01BK_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ISABEL MARANT---BT007219A008S01BK_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ISABEL MARANT---BT007219A008S01BK_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201275900852", "Size": "40", "Qty": "0" },
                { "Barcode": "210383880387", "Size": "42", "Qty": "0" },
                { "Barcode": "211491859921", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1850,00",
                    "BrandReferencePriceExVAT": "1516,39",
                    "Discount": "55",
                    "NetPrice": "682,38",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115758",
            "Model": "BT007219A006S",
            "Variant": "50TA",
            "Season": "AI19",
            "Brand": "Isabel Marant",
            "Category": "Boots",
            "Code": "BT007219A006S50TA",
            "Color": "Beige",
            "Composition": "100% CALF",
            "SizeAndFit": " ",
            "MadeIn": "Portogallo",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Isabel Marant---BT007219A006S50TA.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Isabel Marant---BT007219A006S50TA.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Isabel Marant---BT007219A006S50TA_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Isabel Marant---BT007219A006S50TA_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Isabel Marant---BT007219A006S50TA_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Isabel Marant---BT007219A006S50TA_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201920608655", "Size": "L", "Qty": "0" },
                { "Barcode": "210812629123", "Size": "M", "Qty": "0" },
                { "Barcode": "210422259643", "Size": "S", "Qty": "0" },
                { "Barcode": "211355828765", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "0,00",
                    "BrandReferencePriceExVAT": "0,00",
                    "Discount": "",
                    "NetPrice": "0,00",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115759",
            "Model": "103760002S0T",
            "Variant": "002",
            "Season": "AI19",
            "Brand": "Moncler",
            "Category": "Sneakers",
            "Code": "103760002S0T002",
            "Color": "Bianco",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Moncler---103760002S0T002.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Moncler---103760002S0T002.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Moncler---103760002S0T002_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Moncler---103760002S0T002_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Moncler---103760002S0T002_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Moncler---103760002S0T002_3_P.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "211746198245", "Size": "UNICA", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1105,00",
                    "BrandReferencePriceExVAT": "905,74",
                    "Discount": "55",
                    "NetPrice": "407,58",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115760",
            "Model": "V07035540",
            "Variant": "1002",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "T-shirts and Polos",
            "Code": "V070355401002",
            "Color": "Bianco",
            "Composition": "Cotton 100%",
            "SizeAndFit": " ",
            "MadeIn": "Portogallo",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V070355401002.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V070355401002.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V070355401002_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V070355401002_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V070355401002_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V070355401002_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201908153293", "Size": "30", "Qty": "1" },
                { "Barcode": "200826281799", "Size": "31", "Qty": "0" },
                { "Barcode": "201580912719", "Size": "32", "Qty": "1" },
                { "Barcode": "200298522772", "Size": "33", "Qty": "0" },
                { "Barcode": "201971282199", "Size": "34", "Qty": "1" },
                { "Barcode": "200688892252", "Size": "36", "Qty": "1" },
                { "Barcode": "211608086369", "Size": "40", "Qty": "0" },
                { "Barcode": "211433675957", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "395,00",
                    "BrandReferencePriceExVAT": "323,77",
                    "Discount": "55",
                    "NetPrice": "145,70",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115761",
            "Model": "V07035540",
            "Variant": "1555",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "T-shirts and Polos",
            "Code": "V070355401555",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "Portogallo",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V070355401555.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V070355401555.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V070355401555_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V070355401555_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V070355401555_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V070355401555_2_D.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "210214414916", "Size": "42", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "450,00",
                    "BrandReferencePriceExVAT": "368,85",
                    "Discount": "55",
                    "NetPrice": "165,98",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115762",
            "Model": "ERIC",
            "Variant": "4004",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "ERIC4004",
            "Color": "Blu",
            "Composition": "Tomaia: 42% CALF LEATHER 35% PL 16% PA 7% PU",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---ERIC4004.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---ERIC4004.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---ERIC4004_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---ERIC4004_1_D.jpg"
                },
                {
                    "No": "7",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---ERIC4004_6_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---ERIC4004_6_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201634916736", "Size": "L", "Qty": "0" },
                { "Barcode": "201244547256", "Size": "M", "Qty": "0" },
                { "Barcode": "210136567724", "Size": "S", "Qty": "0" },
                { "Barcode": "200025286215", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "200,00",
                    "BrandReferencePriceExVAT": "163,93",
                    "Discount": "55",
                    "NetPrice": "73,77",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115763",
            "Model": "S2291200TI",
            "Variant": "1102",
            "Season": "AI19",
            "Brand": "Loewe",
            "Category": "Coats",
            "Code": "S2291200TI1102",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---LOEWE---S2291200TI1102_1-D0.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---LOEWE---S2291200TI1102_1-D0.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---LOEWE---S2291200TI1102_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---LOEWE---S2291200TI1102_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200241245283", "Size": "L", "Qty": "0" },
                { "Barcode": "201850875804", "Size": "M", "Qty": "0" },
                { "Barcode": "211460506326", "Size": "S", "Qty": "0" },
                { "Barcode": "201349224817", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1990,00",
                    "BrandReferencePriceExVAT": "1631,15",
                    "Discount": "55",
                    "NetPrice": "734,02",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115764",
            "Model": "512192Y337J",
            "Variant": "1004",
            "Season": "AI19",
            "Brand": "Saint Laurent",
            "Category": "Shirts",
            "Code": "512192Y337J1004",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---512192Y337J1004.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---512192Y337J1004.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---512192Y337J1004_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---512192Y337J1004_1_D.jpg"
                },
                {
                    "No": "6",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---512192Y337J1004_5_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---512192Y337J1004_5_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210098188468", "Size": "40", "Qty": "0" },
                { "Barcode": "201206168000", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "825,00",
                    "BrandReferencePriceExVAT": "676,23",
                    "Discount": "55",
                    "NetPrice": "304,30",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115765",
            "Model": "BW005M101L",
            "Variant": "001",
            "Season": "AI19",
            "Brand": "Givenchy",
            "Category": "Coats",
            "Code": "BW005M101L001",
            "Color": "Nero",
            "Composition": "Synthetic->Polyester100 % Synthetic->Polyamide100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BW005M101L001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BW005M101L001.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BW005M101L001_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BW005M101L001_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BW005M101L001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BW005M101L001_2_D.jpg"
                },
                {
                    "No": "12",
                    "PictureUrl": "https://www.atelieronweb.com/foto/A19---givenchy---BW005M101L001_11_P.JPG",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_A19---givenchy---BW005M101L001_11_P.JPG"
                },
                {
                    "No": "13",
                    "PictureUrl": "https://www.atelieronweb.com/foto/A19---givenchy---BW005M101L001_12_P.JPG",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_A19---givenchy---BW005M101L001_12_P.JPG"
                },
                {
                    "No": "14",
                    "PictureUrl": "https://www.atelieronweb.com/foto/A19---givenchy---BW005M101L001_13_P.JPG",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_A19---givenchy---BW005M101L001_13_P.JPG"
                }
            ],
            "Inventory": [
                { "Barcode": "201562724933", "Size": "40", "Qty": "0" },
                { "Barcode": "201953094413", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "78,00",
                    "BrandReferencePriceExVAT": "63,93",
                    "Discount": "55",
                    "NetPrice": "28,77",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115766",
            "Model": "BW40AC3Z26",
            "Variant": "001",
            "Season": "AI19",
            "Brand": "Givenchy",
            "Category": "Skirts",
            "Code": "BW40AC3Z26001",
            "Color": "Nero",
            "Composition": "Synthetic->Spandex/Elastane12 % Synthetic->Polyester100 % Natural (Veg)->Cotton88 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BW40AC3Z26001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BW40AC3Z26001.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BW40AC3Z26001_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BW40AC3Z26001_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BW40AC3Z26001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BW40AC3Z26001_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BW40AC3Z26001_3_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BW40AC3Z26001_3_D.jpg"
                },
                {
                    "No": "15",
                    "PictureUrl": "https://www.atelieronweb.com/foto/A19---givenchy---BW40AC3Z26001_14_P.JPG",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_A19---givenchy---BW40AC3Z26001_14_P.JPG"
                }
            ],
            "Inventory": [
                { "Barcode": "201508566980", "Size": "12", "Qty": "0" },
                { "Barcode": "211287299059", "Size": "18", "Qty": "0" },
                { "Barcode": "210550693497", "Size": "24", "Qty": "0" },
                { "Barcode": "201285924885", "Size": "30", "Qty": "0" },
                { "Barcode": "211388314523", "Size": "42", "Qty": "1" },
                { "Barcode": "210171311572", "Size": "9", "Qty": "0" },
                { "Barcode": "210886341120", "Size": "UNI", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "350,00",
                    "BrandReferencePriceExVAT": "286,89",
                    "Discount": "55",
                    "NetPrice": "129,10",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115767",
            "Model": "588755QJAAH",
            "Variant": "1080",
            "Season": "AI19",
            "Brand": "Alexander McQueen",
            "Category": "Trousers",
            "Code": "588755QJAAH1080",
            "Color": "Grigio",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ALEXANDER McQUEEN---588755QJAAH1080.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ALEXANDER McQUEEN---588755QJAAH1080.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ALEXANDER McQUEEN---588755QJAAH1080_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ALEXANDER McQUEEN---588755QJAAH1080_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ALEXANDER McQUEEN---588755QJAAH1080_2_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ALEXANDER McQUEEN---588755QJAAH1080_2_P.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---ALEXANDER McQUEEN---588755QJAAH1080_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---ALEXANDER McQUEEN---588755QJAAH1080_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200581501069", "Size": "40", "Qty": "0" },
                { "Barcode": "201778684001", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "615,00",
                    "BrandReferencePriceExVAT": "504,10",
                    "Discount": "55",
                    "NetPrice": "226,84",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115768",
            "Model": "S72LB0236S30662",
            "Variant": "470",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Trousers",
            "Code": "S72LB0236S30662470",
            "Color": "Grigio",
            "Composition": "Synthetic->Spandex/Elastane2 % Synthetic->Polyester65 % Natural (Veg)->Cotton35 % Natural (Veg)->Cotton98 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S72LB0236S30662470.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S72LB0236S30662470.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S72LB0236S30662470_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S72LB0236S30662470_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S72LB0236S30662470_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S72LB0236S30662470_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201596537480", "Size": "38", "Qty": "0" },
                { "Barcode": "210704517016", "Size": "40", "Qty": "0" },
                { "Barcode": "201812496548", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1205,00",
                    "BrandReferencePriceExVAT": "987,70",
                    "Discount": "55",
                    "NetPrice": "444,47",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115769",
            "Model": "G9OJ8THH761",
            "Variant": "HN33A",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Sweaters",
            "Code": "G9OJ8THH761HN33A",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G9OJ8THH761HN33A.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G9OJ8THH761HN33A.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G9OJ8THH761HN33A_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G9OJ8THH761HN33A_1_D.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G9OJ8THH761HN33A_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G9OJ8THH761HN33A_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201565183885", "Size": "L", "Qty": "0" },
                { "Barcode": "201174814405", "Size": "M", "Qty": "0" },
                { "Barcode": "211739594299", "Size": "S", "Qty": "0" },
                { "Barcode": "201955553364", "Size": "XL", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1860,00",
                    "BrandReferencePriceExVAT": "1524,59",
                    "Discount": "55",
                    "NetPrice": "686,07",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115770",
            "Model": "GYWZEZFU6VS",
            "Variant": "M0299",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Trousers",
            "Code": "GYWZEZFU6VSM0299",
            "Color": "Beige",
            "Composition": "Synthetic->Spandex/Elastane3 % Natural (Veg)->Cotton97 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---GYWZEZFU6VSM0299.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---GYWZEZFU6VSM0299.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---GYWZEZFU6VSM0299_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---GYWZEZFU6VSM0299_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---GYWZEZFU6VSM0299_2_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---GYWZEZFU6VSM0299_2_P.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---GYWZEZFU6VSM0299_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---GYWZEZFU6VSM0299_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200171512432", "Size": "L", "Qty": "0" },
                { "Barcode": "201781142952", "Size": "M", "Qty": "0" },
                { "Barcode": "200345922844", "Size": "S", "Qty": "0" },
                { "Barcode": "200561881911", "Size": "XL", "Qty": "0" },
                { "Barcode": "200952251391", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2690,00",
                    "BrandReferencePriceExVAT": "2204,92",
                    "Discount": "55",
                    "NetPrice": "992,21",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115771",
            "Model": "5865860ZS60",
            "Variant": "9373",
            "Season": "AI19",
            "Brand": "Saint Laurent",
            "Category": "Sneakers",
            "Code": "5865860ZS609373",
            "Color": "Bianco",
            "Composition": "Natural (other)->Rubber100 % Furs & Skins->Leather100 % Furs & Skins->Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---5865860ZS609373.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---5865860ZS609373.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---5865860ZS609373_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---5865860ZS609373_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210777840981", "Size": "L/XL", "Qty": "0" },
                { "Barcode": "211669861447", "Size": "S/M", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "210,00",
                    "BrandReferencePriceExVAT": "172,13",
                    "Discount": "48",
                    "NetPrice": "89,51",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115772",
            "Model": "581951BT300",
            "Variant": "1000",
            "Season": "AI19",
            "Brand": "Saint Laurent",
            "Category": "Boots",
            "Code": "581951BT3001000",
            "Color": "Nero",
            "Composition": "Furs & Skins->Leather100 % Furs & Skins->Leather100 % Furs & Skins->Calf Suede100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---581951BT3001000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---581951BT3001000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---581951BT3001000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---581951BT3001000_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---581951BT3001000_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---581951BT3001000_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200810258670", "Size": "40", "Qty": "0" },
                { "Barcode": "200635848258", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1890,00",
                    "BrandReferencePriceExVAT": "1549,18",
                    "Discount": "55",
                    "NetPrice": "697,13",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115773",
            "Model": "V04835506",
            "Variant": "1555",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "Dresses",
            "Code": "V048355061555",
            "Color": "Nero",
            "Composition": "100% cotton ",
            "SizeAndFit": " ",
            "MadeIn": "Italy ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Moschino---V048355061555.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Moschino---V048355061555.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Moschino---V048355061555_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Moschino---V048355061555_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Moschino---V048355061555_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Moschino---V048355061555_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200133133176", "Size": "40", "Qty": "0" },
                { "Barcode": "210196262083", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "450,00",
                    "BrandReferencePriceExVAT": "368,85",
                    "Discount": "55",
                    "NetPrice": "165,98",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115774",
            "Model": "V09365504",
            "Variant": "1555",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "Sweaters",
            "Code": "V093655041555",
            "Color": "Nero",
            "Composition": "45% acrylic, 40% alpaca, 15% wool ",
            "SizeAndFit": " ",
            "MadeIn": "Italy ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V093655041555.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V093655041555.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V093655041555_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V093655041555_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V093655041555_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V093655041555_2_D.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "201168210459", "Size": "UNICA", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "990,00",
                    "BrandReferencePriceExVAT": "811,48",
                    "Discount": "48",
                    "NetPrice": "421,97",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115775",
            "Model": "V09035506",
            "Variant": "1507",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "Sweaters",
            "Code": "V090355061507",
            "Color": "Grigio",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "Italy ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V090355061507.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V090355061507.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V090355061507_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V090355061507_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V090355061507_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V090355061507_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V090355061507_3_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V090355061507_3_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211384169528", "Size": "L", "Qty": "0" },
                { "Barcode": "210993800049", "Size": "M", "Qty": "0" },
                { "Barcode": "201558579939", "Size": "S", "Qty": "0" },
                { "Barcode": "211774539008", "Size": "XL", "Qty": "0" },
                { "Barcode": "210164908487", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2395,00",
                    "BrandReferencePriceExVAT": "1963,11",
                    "Discount": "48",
                    "NetPrice": "1020,82",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115776",
            "Model": "J07015540",
            "Variant": "1002",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "T-shirts and Polos",
            "Code": "J070155401002",
            "Color": "Bianco",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "Italy ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Moschino---J070155401002.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Moschino---J070155401002.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Moschino---J070155401002_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Moschino---J070155401002_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Moschino---J070155401002_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Moschino---J070155401002_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201304241615", "Size": "40", "Qty": "0" },
                { "Barcode": "210739461725", "Size": "42", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "985,00",
                    "BrandReferencePriceExVAT": "807,38",
                    "Discount": "48",
                    "NetPrice": "419,84",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115777",
            "Model": "V07205540",
            "Variant": "8555",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "T-shirts and Polos",
            "Code": "V072055408555",
            "Color": "Nero",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "Italy ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V072055408555.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V072055408555.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V072055408555_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V072055408555_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V072055408555_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V072055408555_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201812194782", "Size": "40", "Qty": "0" },
                { "Barcode": "210920174317", "Size": "42", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1250,00",
                    "BrandReferencePriceExVAT": "1024,59",
                    "Discount": "48",
                    "NetPrice": "532,79",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115778",
            "Model": "V07205540",
            "Variant": "8002",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "T-shirts and Polos",
            "Code": "V072055408002",
            "Color": "",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V072055408002.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V072055408002.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V072055408002_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V072055408002_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V072055408002_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V072055408002_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200028153849", "Size": "40", "Qty": "0" },
                { "Barcode": "200418523329", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "390,00",
                    "BrandReferencePriceExVAT": "319,67",
                    "Discount": "48",
                    "NetPrice": "166,23",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115779",
            "Model": "F962TO0105AC",
            "Variant": "99",
            "Season": "AI19",
            "Brand": "Kenzo",
            "Category": "Sweaters",
            "Code": "F962TO0105AC99",
            "Color": "Nero",
            "Composition": "82% Triacetate 18% Polyester",
            "SizeAndFit": " ",
            "MadeIn": "Madacascar",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F962TO0105AC99.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F962TO0105AC99.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F962TO0105AC99_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F962TO0105AC99_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F962TO0105AC99_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F962TO0105AC99_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211736159752", "Size": "40", "Qty": "0" },
                { "Barcode": "210126529232", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1300,00",
                    "BrandReferencePriceExVAT": "1065,57",
                    "Discount": "48",
                    "NetPrice": "554,10",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115780",
            "Model": "F965PU4003LD",
            "Variant": "MU",
            "Season": "AI19",
            "Brand": "Kenzo",
            "Category": "Sweaters",
            "Code": "F965PU4003LDMU",
            "Color": "Nero",
            "Composition": "78% wool 22% nylon ",
            "SizeAndFit": " ",
            "MadeIn": "China ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F965PU4003LDMU.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F965PU4003LDMU.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F965PU4003LDMU_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F965PU4003LDMU_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F965PU4003LDMU_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F965PU4003LDMU_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211353582995", "Size": "40½", "Qty": "0" },
                { "Barcode": "200886828217", "Size": "41½", "Qty": "0" },
                { "Barcode": "210071193049", "Size": "42", "Qty": "0" },
                { "Barcode": "201254443913", "Size": "43", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2195,00",
                    "BrandReferencePriceExVAT": "1799,18",
                    "Discount": "48",
                    "NetPrice": "935,57",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115781",
            "Model": "F005TS0924SG",
            "Variant": "99",
            "Season": "AI19",
            "Brand": "Kenzo",
            "Category": "T-shirts and Polos",
            "Code": "F005TS0924SG99",
            "Color": "Nero",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "Portugal",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F005TS0924SG99.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F005TS0924SG99.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F005TS0924SG99_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F005TS0924SG99_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F005TS0924SG99_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F005TS0924SG99_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201405787552", "Size": "48", "Qty": "0" },
                { "Barcode": "201944975151", "Size": "50", "Qty": "0" },
                { "Barcode": "", "Size": "52", "Qty": "0" },
                { "Barcode": "211917838230", "Size": "52", "Qty": "0" },
                { "Barcode": "", "Size": "54", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "950,00",
                    "BrandReferencePriceExVAT": "778,69",
                    "Discount": "48",
                    "NetPrice": "404,92",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115782",
            "Model": "F965TS0464BD",
            "Variant": "99",
            "Season": "AI19",
            "Brand": "Kenzo",
            "Category": "T-shirts and Polos",
            "Code": "F965TS0464BD99",
            "Color": "Nero",
            "Composition": "70% cotton 30% polyester ",
            "SizeAndFit": " ",
            "MadeIn": "Portugal",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Kenzo---F965TS0464BD99.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Kenzo---F965TS0464BD99.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Kenzo---F965TS0464BD99_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Kenzo---F965TS0464BD99_1_D.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Kenzo---F965TS0464BD99_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Kenzo---F965TS0464BD99_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210858132756", "Size": "38", "Qty": "0" },
                { "Barcode": "201299846672", "Size": "39", "Qty": "0" },
                { "Barcode": "210296720925", "Size": "40", "Qty": "0" },
                { "Barcode": "201563587438", "Size": "41", "Qty": "0" },
                { "Barcode": "200398026556", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "245,00",
                    "BrandReferencePriceExVAT": "200,82",
                    "Discount": "48",
                    "NetPrice": "104,43",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115783",
            "Model": "F965TS0464BD",
            "Variant": "46",
            "Season": "AI19",
            "Brand": "Kenzo",
            "Category": "T-shirts and Polos",
            "Code": "F965TS0464BD46",
            "Color": "Bianco",
            "Composition": "70% cotton 30% polyester ",
            "SizeAndFit": " ",
            "MadeIn": "Portugal",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F965TS0464BD46.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F965TS0464BD46.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F965TS0464BD46_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F965TS0464BD46_1_D.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F965TS0464BD46_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F965TS0464BD46_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200842747836", "Size": "S", "Qty": "0" },
                { "Barcode": "211950727372", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1500,00",
                    "BrandReferencePriceExVAT": "1229,51",
                    "Discount": "48",
                    "NetPrice": "639,34",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115784",
            "Model": "F965TS0464BD",
            "Variant": "51",
            "Season": "AI19",
            "Brand": "Kenzo",
            "Category": "T-shirts and Polos",
            "Code": "F965TS0464BD51",
            "Color": "",
            "Composition": "70% cotton 30% polyester ",
            "SizeAndFit": " ",
            "MadeIn": "Portugal",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F965TS0464BD51.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F965TS0464BD51.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F965TS0464BD51_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F965TS0464BD51_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---KENZO---F965TS0464BD51_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---KENZO---F965TS0464BD51_2_D.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "201892316641", "Size": "S", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "990,00",
                    "BrandReferencePriceExVAT": "811,48",
                    "Discount": "48",
                    "NetPrice": "421,97",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115785",
            "Model": "CHC19A21891",
            "Variant": "001",
            "Season": "AI19",
            "Brand": "Chloè",
            "Category": "Sneakers",
            "Code": "CHC19A21891001",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19A21891001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19A21891001.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19A21891001_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19A21891001_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19A21891001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19A21891001_2_D.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "201782731524", "Size": "S", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "350,00",
                    "BrandReferencePriceExVAT": "286,89",
                    "Discount": "48",
                    "NetPrice": "149,18",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115786",
            "Model": "CHC19U13302",
            "Variant": "56B",
            "Season": "AI19",
            "Brand": "Chloè",
            "Category": "Flat shoes",
            "Code": "CHC19U1330256B",
            "Color": "Marrone",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19U1330256B.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19U1330256B.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19U1330256B_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19U1330256B_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19U1330256B_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19U1330256B_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210825885764", "Size": "M", "Qty": "0" },
                { "Barcode": "211207738624", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1495,00",
                    "BrandReferencePriceExVAT": "1225,41",
                    "Discount": "48",
                    "NetPrice": "637,21",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115787",
            "Model": "OWIA177E19F48105",
            "Variant": "9101",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Sneakers",
            "Code": "OWIA177E19F481059101",
            "Color": "Argento",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWIA177E19F481059101.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWIA177E19F481059101.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWIA177E19F481059101_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWIA177E19F481059101_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWIA177E19F481059101_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWIA177E19F481059101_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200498645188", "Size": "S", "Qty": "0" },
                { "Barcode": "211216255244", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1395,00",
                    "BrandReferencePriceExVAT": "1143,44",
                    "Discount": "48",
                    "NetPrice": "594,59",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115788",
            "Model": "BELLE",
            "Variant": "4026",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "BELLE4026",
            "Color": "Bianco",
            "Composition": "Pelle, gomma",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---BELLE4026.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---BELLE4026.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---BELLE4026_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---BELLE4026_1_D.jpg"
                },
                {
                    "No": "10",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---BELLE4026_9_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---BELLE4026_9_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210554028057", "Size": "M", "Qty": "0" },
                { "Barcode": "200912609727", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1445,00",
                    "BrandReferencePriceExVAT": "1184,43",
                    "Discount": "48",
                    "NetPrice": "615,90",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115789",
            "Model": "BELLE",
            "Variant": "4025",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "BELLE4025",
            "Color": "Nero",
            "Composition": "Pelle, gomma",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---BELLE4025.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---BELLE4025.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---BELLE4025_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---BELLE4025_1_D.jpg"
                },
                {
                    "No": "6",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---BELLE4025_5_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---BELLE4025_5_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211996994203", "Size": "M", "Qty": "0" },
                { "Barcode": "210324234777", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1095,00",
                    "BrandReferencePriceExVAT": "897,54",
                    "Discount": "48",
                    "NetPrice": "466,72",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115790",
            "Model": "CONNY",
            "Variant": "4031",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "CONNY4031",
            "Color": "Bianco",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---CONNY4031.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---CONNY4031.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---CONNY4031_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---CONNY4031_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---CONNY4031_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---CONNY4031_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200714604255", "Size": "M", "Qty": "0" },
                { "Barcode": "211587120548", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1350,00",
                    "BrandReferencePriceExVAT": "1106,56",
                    "Discount": "48",
                    "NetPrice": "575,41",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115791",
            "Model": "CONNY",
            "Variant": "4030",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "CONNY4030",
            "Color": "",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---CONNY4030.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---CONNY4030.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---CONNY4030_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---CONNY4030_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---CONNY4030_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---CONNY4030_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210426038522", "Size": "M", "Qty": "0" },
                { "Barcode": "210753279096", "Size": "S", "Qty": "0" },
                { "Barcode": "211534018056", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "551,00",
                    "BrandReferencePriceExVAT": "451,64",
                    "Discount": "32",
                    "NetPrice": "307,11",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115792",
            "Model": "CONNY",
            "Variant": "1806",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "CONNY1806",
            "Color": "Nero",
            "Composition": "Tomaia: 20% CALF LEATHER 33%PL 25% PA 22% AL",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---CONNY1806.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---CONNY1806.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---CONNY1806_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---CONNY1806_1_D.jpg"
                },
                {
                    "No": "7",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---CONNY1806_6_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---CONNY1806_6_P.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "201954736242", "Size": "M", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "340,00",
                    "BrandReferencePriceExVAT": "278,69",
                    "Discount": "40",
                    "NetPrice": "167,21",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115793",
            "Model": "BETH",
            "Variant": "4038",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "BETH4038",
            "Color": "Bianco",
            "Composition": "Pelle, gomma",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---BETH4038.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---BETH4038.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---BETH4038_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---BETH4038_1_D.jpg"
                },
                {
                    "No": "6",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---BETH4038_5_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---BETH4038_5_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200322351936", "Size": "M", "Qty": "0" },
                { "Barcode": "201432214309", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "325,00",
                    "BrandReferencePriceExVAT": "266,39",
                    "Discount": "32",
                    "NetPrice": "181,15",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115794",
            "Model": "BETH",
            "Variant": "4036",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "BETH4036",
            "Color": "Verde",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---BETH4036.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---BETH4036.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---BETH4036_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---BETH4036_1_D.jpg"
                },
                {
                    "No": "10",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---BETH4036_9_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---BETH4036_9_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200572264736", "Size": "26", "Qty": "0" },
                { "Barcode": "200962634216", "Size": "27", "Qty": "0" },
                { "Barcode": "210070613751", "Size": "28", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "650,00",
                    "BrandReferencePriceExVAT": "532,79",
                    "Discount": "32",
                    "NetPrice": "362,30",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115795",
            "Model": "MICK",
            "Variant": "4019",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "MICK4019",
            "Color": "",
            "Composition": "Synthetic->Nylon100 % Natural (other)->Rubber100 % Furs & Skins->Suede100 % Furs & Skins->Leather100 % Furs & Skins->Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---MICK4019.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---MICK4019.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---MICK4019_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---MICK4019_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---MICK4019_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---MICK4019_2_D.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "200766380962", "Size": "S", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "520,00",
                    "BrandReferencePriceExVAT": "426,23",
                    "Discount": "32",
                    "NetPrice": "289,84",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115796",
            "Model": "MICK",
            "Variant": "4018",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "MICK4018",
            "Color": "Blu",
            "Composition": "Tomaia: 40% CALF LEATHER 15% PA 16% PL 5% NY 24% PU",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---MICK4018.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---MICK4018.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---MICK4018_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---MICK4018_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---MICK4018_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---MICK4018_3_P.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "210460983231", "Size": "M", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "225,00",
                    "BrandReferencePriceExVAT": "184,43",
                    "Discount": "32",
                    "NetPrice": "125,41",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115797",
            "Model": "LUCY",
            "Variant": "206E",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "LUCY206E",
            "Color": "Bianco",
            "Composition": "Tomaia: 40%CALF LEATHER 45%PL 15%PA",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---LUCY206E.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---LUCY206E.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---LUCY206E_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---LUCY206E_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---LUCY206E_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---LUCY206E_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210027223043", "Size": "L", "Qty": "0" },
                { "Barcode": "210540193845", "Size": "M", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "125,00",
                    "BrandReferencePriceExVAT": "102,46",
                    "Discount": "32",
                    "NetPrice": "69,67",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115798",
            "Model": "LUCY",
            "Variant": "600E",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "LUCY600E",
            "Color": "Grigio",
            "Composition": "Tomaia: 40%CALF LEATHER 45%PL 15%PA",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---LUCY600E.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---LUCY600E.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---LUCY600E_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---LUCY600E_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---PREMIATA---LUCY600E_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---PREMIATA---LUCY600E_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200038989270", "Size": "M", "Qty": "0" },
                { "Barcode": "211711302284", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "210,00",
                    "BrandReferencePriceExVAT": "172,13",
                    "Discount": "48",
                    "NetPrice": "89,51",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115799",
            "Model": "ZACZAC",
            "Variant": "3264",
            "Season": "AI19",
            "Brand": "Premiata",
            "Category": "Sneakers",
            "Code": "ZACZAC3264",
            "Color": "",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---ZACZAC3264.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---ZACZAC3264.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---ZACZAC3264_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---ZACZAC3264_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Premiata---ZACZAC3264_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Premiata---ZACZAC3264_2_D.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "211251199953", "Size": "M", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "805,00",
                    "BrandReferencePriceExVAT": "659,84",
                    "Discount": "40",
                    "NetPrice": "395,90",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115800",
            "Model": "CHC19AMA17333",
            "Variant": "401",
            "Season": "AI19",
            "Brand": "Chloè",
            "Category": "Coats",
            "Code": "CHC19AMA17333401",
            "Color": "Blu",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "Slovakia ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19AMA17333401.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19AMA17333401.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19AMA17333401_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19AMA17333401_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19AMA17333401_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19AMA17333401_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201100713927", "Size": "40", "Qty": "0" },
                { "Barcode": "210765464550", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "354,00",
                    "BrandReferencePriceExVAT": "290,16",
                    "Discount": "55",
                    "NetPrice": "130,57",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115801",
            "Model": "2Y006612G",
            "Variant": "38AW",
            "Season": "AI19",
            "Brand": "Céline",
            "Category": "Sweaters",
            "Code": "2Y006612G38AW",
            "Color": "Nero",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Celine---2Y006612G38AW.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Celine---2Y006612G38AW.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Celine---2Y006612G38AW_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Celine---2Y006612G38AW_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Celine---2Y006612G38AW_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Celine---2Y006612G38AW_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201867750564", "Size": "25", "Qty": "1" },
                { "Barcode": "210839624020", "Size": "26", "Qty": "0" },
                { "Barcode": "211786334389", "Size": "27", "Qty": "0" },
                { "Barcode": "201838713186", "Size": "28", "Qty": "0" },
                { "Barcode": "210323737151", "Size": "29", "Qty": "1" },
                { "Barcode": "201816024880", "Size": "30", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "370,00",
                    "BrandReferencePriceExVAT": "303,28",
                    "Discount": "48",
                    "NetPrice": "157,70",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115802",
            "Model": "2X314605G",
            "Variant": "38AW",
            "Season": "AI19",
            "Brand": "Céline",
            "Category": "T-shirts and Polos",
            "Code": "2X314605G38AW",
            "Color": "Nero",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Celine---2X314605G38AW.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Celine---2X314605G38AW.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Celine---2X314605G38AW_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Celine---2X314605G38AW_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Celine---2X314605G38AW_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Celine---2X314605G38AW_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210614732137", "Size": "34", "Qty": "0" },
                { "Barcode": "210160113740", "Size": "36", "Qty": "0" },
                { "Barcode": "200522989579", "Size": "38", "Qty": "0" },
                { "Barcode": "210007168568", "Size": "40", "Qty": "0" },
                { "Barcode": "211794602881", "Size": "42", "Qty": "0" },
                { "Barcode": "211733147680", "Size": "44", "Qty": "0" },
                { "Barcode": "201906893266", "Size": "46", "Qty": "0" },
                { "Barcode": "201848372846", "Size": "48", "Qty": "0" },
                { "Barcode": "210190435358", "Size": "50", "Qty": "0" },
                { "Barcode": "210868757682", "Size": "52", "Qty": "0" },
                { "Barcode": "211634834073", "Size": "54", "Qty": "0" },
                { "Barcode": "200067479797", "Size": "56", "Qty": "0" },
                { "Barcode": "201840440555", "Size": "58", "Qty": "0" },
                { "Barcode": "210337538471", "Size": "L", "Qty": "1" },
                { "Barcode": "201797076466", "Size": "M", "Qty": "2" },
                { "Barcode": "211947168991", "Size": "S", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "120,00",
                    "BrandReferencePriceExVAT": "98,36",
                    "Discount": "48",
                    "NetPrice": "51,15",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115803",
            "Model": "F8H32ZG7TAX",
            "Variant": "N0000",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "T-shirts and Polos",
            "Code": "F8H32ZG7TAXN0000",
            "Color": "Nero",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---F8H32ZG7TAXN0000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---F8H32ZG7TAXN0000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---F8H32ZG7TAXN0000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---F8H32ZG7TAXN0000_1_D.jpg"
                },
                {
                    "No": "8",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---F8H32ZG7TAXN0000_7_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---F8H32ZG7TAXN0000_7_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200291814002", "Size": "2XS", "Qty": "0" },
                { "Barcode": "211081984449", "Size": "3XL", "Qty": "0" },
                { "Barcode": "210964568786", "Size": "3XS", "Qty": "0" },
                { "Barcode": "201459349593", "Size": "4XL", "Qty": "0" },
                { "Barcode": "200632996356", "Size": "L", "Qty": "0" },
                { "Barcode": "200244754574", "Size": "M", "Qty": "0" },
                { "Barcode": "210392749223", "Size": "S", "Qty": "0" },
                { "Barcode": "200020975142", "Size": "XL", "Qty": "0" },
                { "Barcode": "200274949849", "Size": "XS", "Qty": "0" },
                { "Barcode": "210608354041", "Size": "XXL", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "95,00",
                    "BrandReferencePriceExVAT": "77,87",
                    "Discount": "48",
                    "NetPrice": "40,49",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115804",
            "Model": "F9F07ZG7TAS",
            "Variant": "N0000",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Sweaters",
            "Code": "F9F07ZG7TASN0000",
            "Color": "Nero",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---F9F07ZG7TASN0000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---F9F07ZG7TASN0000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---F9F07ZG7TASN0000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---F9F07ZG7TASN0000_1_D.jpg"
                },
                {
                    "No": "7",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---F9F07ZG7TASN0000_6_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---F9F07ZG7TASN0000_6_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201784182560", "Size": "34", "Qty": "0" },
                { "Barcode": "200637147643", "Size": "36", "Qty": "0" },
                { "Barcode": "201129857979", "Size": "38", "Qty": "0" },
                { "Barcode": "211005681970", "Size": "40", "Qty": "0" },
                { "Barcode": "200689677882", "Size": "42", "Qty": "0" },
                { "Barcode": "211646954973", "Size": "44", "Qty": "0" },
                { "Barcode": "201496890270", "Size": "46", "Qty": "0" },
                { "Barcode": "200461526471", "Size": "48", "Qty": "0" },
                { "Barcode": "210877481008", "Size": "50", "Qty": "0" },
                { "Barcode": "200773966544", "Size": "52", "Qty": "0" },
                { "Barcode": "210114027389", "Size": "54", "Qty": "0" },
                { "Barcode": "211542845232", "Size": "56", "Qty": "0" },
                { "Barcode": "211639595444", "Size": "58", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "370,00",
                    "BrandReferencePriceExVAT": "303,28",
                    "Discount": "48",
                    "NetPrice": "157,70",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115805",
            "Model": "BW907F4Z5B",
            "Variant": "009",
            "Season": "AI19",
            "Brand": "Givenchy",
            "Category": "Sweaters",
            "Code": "BW907F4Z5B009",
            "Color": "Nero",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BW907F4Z5B009.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BW907F4Z5B009.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200148262636", "Size": "34", "Qty": "0" },
                { "Barcode": "200608952030", "Size": "36", "Qty": "0" },
                { "Barcode": "201988352001", "Size": "38", "Qty": "0" },
                { "Barcode": "211022942305", "Size": "40", "Qty": "0" },
                { "Barcode": "210890347513", "Size": "42", "Qty": "0" },
                { "Barcode": "211622243375", "Size": "44", "Qty": "0" },
                { "Barcode": "201677110317", "Size": "46", "Qty": "0" },
                { "Barcode": "210931159502", "Size": "48", "Qty": "0" },
                { "Barcode": "200513882679", "Size": "50", "Qty": "0" },
                { "Barcode": "201925619413", "Size": "52", "Qty": "0" },
                { "Barcode": "201973615447", "Size": "54", "Qty": "0" },
                { "Barcode": "201958749540", "Size": "56", "Qty": "0" },
                { "Barcode": "211339742161", "Size": "58", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "490,00",
                    "BrandReferencePriceExVAT": "401,64",
                    "Discount": "32",
                    "NetPrice": "273,11",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115807",
            "Model": "578487SNB47",
            "Variant": "1000",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Jackets",
            "Code": "578487SNB471000",
            "Color": "Grigio",
            "Composition": " 100% wool Lining: 52% viscose, 48% cotton",
            "SizeAndFit": "",
            "MadeIn": "Ungheria",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---578487SNB471000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---578487SNB471000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---578487SNB471000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---578487SNB471000_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---578487SNB471000_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---578487SNB471000_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201132652642", "Size": "2XS", "Qty": "0" },
                { "Barcode": "201677379105", "Size": "35", "Qty": "0" },
                { "Barcode": "201094284842", "Size": "35½", "Qty": "0" },
                { "Barcode": "201696930981", "Size": "36", "Qty": "0" },
                { "Barcode": "200067748584", "Size": "36½", "Qty": "0" },
                { "Barcode": "211289043164", "Size": "37", "Qty": "0" },
                { "Barcode": "210743809985", "Size": "37½", "Qty": "0" },
                { "Barcode": "211936445894", "Size": "38", "Qty": "0" },
                { "Barcode": "210676319742", "Size": "38½", "Qty": "0" },
                { "Barcode": "210155328954", "Size": "39", "Qty": "0" },
                { "Barcode": "201797076999", "Size": "3XL", "Qty": "0" },
                { "Barcode": "211114992074", "Size": "3XS", "Qty": "0" },
                { "Barcode": "200838320506", "Size": "40", "Qty": "0" },
                { "Barcode": "210563309952", "Size": "4XL", "Qty": "0" },
                { "Barcode": "201551119471", "Size": "L", "Qty": "0" },
                { "Barcode": "201155960628", "Size": "M", "Qty": "0" },
                { "Barcode": "211117120880", "Size": "S", "Qty": "0" },
                { "Barcode": "201844649819", "Size": "XL", "Qty": "0" },
                { "Barcode": "200012064163", "Size": "XS", "Qty": "0" },
                { "Barcode": "211779673803", "Size": "XXL", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "260,00",
                    "BrandReferencePriceExVAT": "213,11",
                    "Discount": "32",
                    "NetPrice": "144,92",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115808",
            "Model": "529866SNB47",
            "Variant": "1000",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Trousers",
            "Code": "529866SNB471000",
            "Color": "Grigio",
            "Composition": "100% wool ",
            "SizeAndFit": " ",
            "MadeIn": "Ungheria",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---529866SNB471000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---529866SNB471000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---529866SNB471000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---529866SNB471000_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---529866SNB471000_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---529866SNB471000_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201892328841", "Size": "L", "Qty": "0" },
                { "Barcode": "211914135486", "Size": "M", "Qty": "0" },
                { "Barcode": "211196525432", "Size": "S", "Qty": "0" },
                { "Barcode": "211157097452", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "395,00",
                    "BrandReferencePriceExVAT": "323,77",
                    "Discount": "55",
                    "NetPrice": "145,70",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115809",
            "Model": "529866SHB55",
            "Variant": "5561",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Trousers",
            "Code": "529866SHB555561",
            "Color": "Fucsia",
            "Composition": "100% wool ",
            "SizeAndFit": " ",
            "MadeIn": "Ungheria",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---529866SHB555561.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---529866SHB555561.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---529866SHB555561_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---529866SHB555561_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---529866SHB555561_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---529866SHB555561_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201893063064", "Size": "40", "Qty": "0" },
                { "Barcode": "201769684647", "Size": "42", "Qty": "0" },
                { "Barcode": "210362881800", "Size": "44", "Qty": "0" },
                { "Barcode": "210992543180", "Size": "46", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "235,00",
                    "BrandReferencePriceExVAT": "192,62",
                    "Discount": "55",
                    "NetPrice": "86,68",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115810",
            "Model": "572845S2089",
            "Variant": "2508",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Sweaters",
            "Code": "572845S20892508",
            "Color": "Beige",
            "Composition": "97% cashmere 3%wool ",
            "SizeAndFit": " ",
            "MadeIn": "Romania ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Stella McCartney---572845S20892508.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Stella McCartney---572845S20892508.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Stella McCartney---572845S20892508_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Stella McCartney---572845S20892508_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201068404140", "Size": "I", "Qty": "0" },
                { "Barcode": "200869131935", "Size": "II", "Qty": "0" },
                { "Barcode": "211194603010", "Size": "III", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1698,00",
                    "BrandReferencePriceExVAT": "1391,80",
                    "Discount": "55",
                    "NetPrice": "626,31",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115811",
            "Model": "576594S2086",
            "Variant": "1262",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Dresses",
            "Code": "576594S20861262",
            "Color": "Grigio",
            "Composition": "100% wool",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Stella McCartney---576594S20861262.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Stella McCartney---576594S20861262.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Stella McCartney---576594S20861262_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Stella McCartney---576594S20861262_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200199223965", "Size": "L", "Qty": "0" },
                { "Barcode": "211977264392", "Size": "M", "Qty": "0" },
                { "Barcode": "211229584252", "Size": "S", "Qty": "0" },
                { "Barcode": "210304504966", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "238,00",
                    "BrandReferencePriceExVAT": "195,08",
                    "Discount": "55",
                    "NetPrice": "87,79",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115812",
            "Model": "576594S2086",
            "Variant": "1000",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Dresses",
            "Code": "576594S20861000",
            "Color": "Nero",
            "Composition": "100% wool",
            "SizeAndFit": " ",
            "MadeIn": "Italy ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Stella McCartney---576594S20861000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Stella McCartney---576594S20861000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Stella McCartney---576594S20861000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Stella McCartney---576594S20861000_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Stella McCartney---576594S20861000_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Stella McCartney---576594S20861000_2_D.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "211370935844", "Size": "TU", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "265,00",
                    "BrandReferencePriceExVAT": "217,21",
                    "Discount": "55",
                    "NetPrice": "97,75",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115813",
            "Model": "571968SHB55",
            "Variant": "1000",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Trousers",
            "Code": "571968SHB551000",
            "Color": "Nero",
            "Composition": "100% wool",
            "SizeAndFit": " ",
            "MadeIn": "Ungheria",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Stella McCartney---571968SHB551000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Stella McCartney---571968SHB551000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Stella McCartney---571968SHB551000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Stella McCartney---571968SHB551000_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Stella McCartney---571968SHB551000_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Stella McCartney---571968SHB551000_3_P.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "211586894912", "Size": "TU", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1195,00",
                    "BrandReferencePriceExVAT": "979,51",
                    "Discount": "40",
                    "NetPrice": "587,70",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115814",
            "Model": "G5GJ7THP5XG",
            "Variant": "HHIH3",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Shirts",
            "Code": "G5GJ7THP5XGHHIH3",
            "Color": "Giallo",
            "Composition": "100% COTTON",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G5GJ7THP5XGHHIH3.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G5GJ7THP5XGHHIH3.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G5GJ7THP5XGHHIH3_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G5GJ7THP5XGHHIH3_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G5GJ7THP5XGHHIH3_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G5GJ7THP5XGHHIH3_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200478915376", "Size": "L", "Qty": "0" },
                { "Barcode": "210806155952", "Size": "M", "Qty": "0" },
                { "Barcode": "211819842043", "Size": "S", "Qty": "0" },
                { "Barcode": "200088545896", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "675,00",
                    "BrandReferencePriceExVAT": "553,28",
                    "Discount": "40",
                    "NetPrice": "331,97",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115815",
            "Model": "G5GM0ZFU5K9",
            "Variant": "N0000",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Shirts",
            "Code": "G5GM0ZFU5K9N0000",
            "Color": "Nero",
            "Composition": "100% COTTON",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G5GM0ZFU5K9N0000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G5GM0ZFU5K9N0000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G5GM0ZFU5K9N0000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G5GM0ZFU5K9N0000_1_D.jpg"
                },
                {
                    "No": "6",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G5GM0ZFU5K9N0000_5_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G5GM0ZFU5K9N0000_5_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211602569837", "Size": "34", "Qty": "0" },
                { "Barcode": "210203960953", "Size": "36", "Qty": "0" },
                { "Barcode": "210966104211", "Size": "38", "Qty": "0" },
                { "Barcode": "210548567583", "Size": "40", "Qty": "0" },
                { "Barcode": "211941065421", "Size": "42", "Qty": "0" },
                { "Barcode": "211699003704", "Size": "44", "Qty": "0" },
                { "Barcode": "211743380895", "Size": "46", "Qty": "0" },
                { "Barcode": "210880554221", "Size": "48", "Qty": "0" },
                { "Barcode": "211662676450", "Size": "50", "Qty": "0" },
                { "Barcode": "211820885965", "Size": "52", "Qty": "0" },
                { "Barcode": "210260637007", "Size": "54", "Qty": "0" },
                { "Barcode": "210706514941", "Size": "56", "Qty": "0" },
                { "Barcode": "201710240444", "Size": "58", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "310,00",
                    "BrandReferencePriceExVAT": "254,10",
                    "Discount": "40",
                    "NetPrice": "152,46",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115816",
            "Model": "G5GL9ZFU5K9",
            "Variant": "W0800",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "Shirts",
            "Code": "G5GL9ZFU5K9W0800",
            "Color": "Bianco",
            "Composition": "100% COTTON",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G5GL9ZFU5K9W0800.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G5GL9ZFU5K9W0800.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G5GL9ZFU5K9W0800_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G5GL9ZFU5K9W0800_1_D.jpg"
                },
                {
                    "No": "7",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G5GL9ZFU5K9W0800_6_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G5GL9ZFU5K9W0800_6_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210556079461", "Size": "34", "Qty": "0" },
                { "Barcode": "210091692838", "Size": "36", "Qty": "0" },
                { "Barcode": "200789131615", "Size": "38", "Qty": "0" },
                { "Barcode": "211968579773", "Size": "40", "Qty": "0" },
                { "Barcode": "201445088279", "Size": "42", "Qty": "0" },
                { "Barcode": "201424230076", "Size": "44", "Qty": "0" },
                { "Barcode": "210857217386", "Size": "46", "Qty": "0" },
                { "Barcode": "200934574543", "Size": "48", "Qty": "0" },
                { "Barcode": "200994949273", "Size": "50", "Qty": "0" },
                { "Barcode": "200109931807", "Size": "52", "Qty": "0" },
                { "Barcode": "200709150608", "Size": "54", "Qty": "0" },
                { "Barcode": "201306317504", "Size": "56", "Qty": "0" },
                { "Barcode": "200180743950", "Size": "58", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "325,00",
                    "BrandReferencePriceExVAT": "266,39",
                    "Discount": "40",
                    "NetPrice": "159,84",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115817",
            "Model": "BM9063401M",
            "Variant": "616",
            "Season": "AI19",
            "Brand": "Givenchy",
            "Category": "Sweaters",
            "Code": "BM9063401M616",
            "Color": "Rosso",
            "Composition": "100% COTTON/TRIM 98% COTTON 2% POLYAMIDE",
            "SizeAndFit": " ",
            "MadeIn": "Cina",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM9063401M616.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM9063401M616.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM9063401M616_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM9063401M616_1_D.jpg"
                },
                {
                    "No": "6",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM9063401M616_5_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM9063401M616_5_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210186647843", "Size": "26", "Qty": "0" },
                { "Barcode": "201294627375", "Size": "27", "Qty": "0" },
                { "Barcode": "210012237431", "Size": "28", "Qty": "0" },
                { "Barcode": "201684996855", "Size": "30", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "285,00",
                    "BrandReferencePriceExVAT": "233,61",
                    "Discount": "40",
                    "NetPrice": "140,16",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115818",
            "Model": "BM9063401M",
            "Variant": "490",
            "Season": "AI19",
            "Brand": "Givenchy",
            "Category": "Sweaters",
            "Code": "BM9063401M490",
            "Color": "Blu",
            "Composition": "100% COTTON/TRIM 98% COTTON 2% POLYAMIDE",
            "SizeAndFit": " ",
            "MadeIn": "Cina",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM9063401M490.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM9063401M490.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM9063401M490_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM9063401M490_1_D.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM9063401M490_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM9063401M490_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210768578762", "Size": "25", "Qty": "0" },
                { "Barcode": "210825500289", "Size": "26", "Qty": "0" },
                { "Barcode": "211738218476", "Size": "27", "Qty": "0" },
                { "Barcode": "201543110341", "Size": "28", "Qty": "0" },
                { "Barcode": "200105834169", "Size": "29", "Qty": "0" },
                { "Barcode": "201933479821", "Size": "30", "Qty": "0" },
                { "Barcode": "201443089579", "Size": "31", "Qty": "0" },
                { "Barcode": "200323849300", "Size": "32", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "285,00",
                    "BrandReferencePriceExVAT": "233,61",
                    "Discount": "40",
                    "NetPrice": "140,16",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115819",
            "Model": "BM70NS3006",
            "Variant": "100",
            "Season": "AI19",
            "Brand": "Givenchy",
            "Category": "T-shirts and Polos",
            "Code": "BM70NS3006100",
            "Color": "Bianco",
            "Composition": "100% COTTON/BAND 62% POLYAMIDE 18% POLYESTER 10% ELASTANE",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM70NS3006100.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM70NS3006100.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM70NS3006100_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM70NS3006100_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM70NS3006100_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM70NS3006100_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200492983261", "Size": "42", "Qty": "0" },
                { "Barcode": "211286790213", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "890,00",
                    "BrandReferencePriceExVAT": "729,51",
                    "Discount": "55",
                    "NetPrice": "328,28",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115820",
            "Model": "BM70J73006",
            "Variant": "001",
            "Season": "AI19",
            "Brand": "Givenchy",
            "Category": "T-shirts and Polos",
            "Code": "BM70J73006001",
            "Color": "Nero",
            "Composition": "100% COTTON/EMBROIDERY 100% POLYESTER ",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM70J73006001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM70J73006001.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM70J73006001_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM70J73006001_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM70J73006001_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM70J73006001_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201625474901", "Size": "40", "Qty": "1" },
                { "Barcode": "211060695011", "Size": "42", "Qty": "1" },
                { "Barcode": "201989347915", "Size": "44", "Qty": "0" },
                { "Barcode": "211587480073", "Size": "4XL", "Qty": "0" },
                { "Barcode": "200241723182", "Size": "5XL", "Qty": "0" },
                { "Barcode": "201562345996", "Size": "L", "Qty": "0" },
                { "Barcode": "200844735941", "Size": "M", "Qty": "0" },
                { "Barcode": "210211990011", "Size": "S", "Qty": "0" },
                { "Barcode": "211635394637", "Size": "XL", "Qty": "0" },
                { "Barcode": "201463633402", "Size": "XS", "Qty": "0" },
                { "Barcode": "211279969866", "Size": "XXL", "Qty": "0" },
                { "Barcode": "200042124969", "Size": "XXS", "Qty": "0" },
                { "Barcode": "201851353702", "Size": "XXX", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2250,00",
                    "BrandReferencePriceExVAT": "1844,26",
                    "Discount": "55",
                    "NetPrice": "829,92",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115821",
            "Model": "BM50C43Y3P",
            "Variant": "004",
            "Season": "AI19",
            "Brand": "Givenchy",
            "Category": "Trousers",
            "Code": "BM50C43Y3P004",
            "Color": "Nero",
            "Composition": "100% COTTONBAND 55% POLYESTER 45% COTTON/EMBROIDERY 96% POLYESTER 4% CERAMIC",
            "SizeAndFit": " ",
            "MadeIn": "Portogallo",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM50C43Y3P004.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM50C43Y3P004.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM50C43Y3P004_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM50C43Y3P004_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BM50C43Y3P004_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BM50C43Y3P004_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201736001496", "Size": "42", "Qty": "0" },
                { "Barcode": "210881138527", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "354,00",
                    "BrandReferencePriceExVAT": "290,16",
                    "Discount": "55",
                    "NetPrice": "130,57",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115822",
            "Model": "BE6016E0A1",
            "Variant": "001",
            "Season": "AI19",
            "Brand": "Givenchy",
            "Category": "Boots",
            "Code": "BE6016E0A1001",
            "Color": "Nero",
            "Composition": "100% CALFSKIN ",
            "SizeAndFit": " ",
            "MadeIn": "ITALY ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BE6016E0A1001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BE6016E0A1001.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BE6016E0A1001_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BE6016E0A1001_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BE6016E0A1001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BE6016E0A1001_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210593853971", "Size": "0", "Qty": "0" },
                { "Barcode": "201309582316", "Size": "1", "Qty": "0" },
                { "Barcode": "201449048019", "Size": "2", "Qty": "0" },
                { "Barcode": "211498196828", "Size": "3", "Qty": "0" },
                { "Barcode": "211662220389", "Size": "4", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1450,00",
                    "BrandReferencePriceExVAT": "1188,52",
                    "Discount": "55",
                    "NetPrice": "534,84",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115823",
            "Model": "8013334",
            "Variant": "A1189",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Sweaters",
            "Code": "8013334A1189",
            "Color": "Nero",
            "Composition": "93% MERINO WOOL 6% POLYAMIDE 1% ELASTANE ",
            "SizeAndFit": " ",
            "MadeIn": "CHINA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Burberry---8013334A1189.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Burberry---8013334A1189.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Burberry---8013334A1189_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Burberry---8013334A1189_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Burberry---8013334A1189_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Burberry---8013334A1189_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210631939910", "Size": "L", "Qty": "0" },
                { "Barcode": "201036045527", "Size": "M", "Qty": "0" },
                { "Barcode": "201041813731", "Size": "S", "Qty": "0" },
                { "Barcode": "200864076078", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2300,00",
                    "BrandReferencePriceExVAT": "1885,25",
                    "Discount": "55",
                    "NetPrice": "848,36",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115824",
            "Model": "8017228",
            "Variant": "A1189",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Sweaters",
            "Code": "8017228A1189",
            "Color": "Nero",
            "Composition": "100% COTTON/98% COTTON 2% ELASTANE",
            "SizeAndFit": " ",
            "MadeIn": "VIETNAM",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8017228A1189.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8017228A1189.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8017228A1189_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8017228A1189_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8017228A1189_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8017228A1189_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200348707401", "Size": "24", "Qty": "0" },
                { "Barcode": "200827072875", "Size": "25", "Qty": "0" },
                { "Barcode": "211907737905", "Size": "26", "Qty": "0" },
                { "Barcode": "210306184212", "Size": "27", "Qty": "0" },
                { "Barcode": "200008564589", "Size": "28", "Qty": "0" },
                { "Barcode": "210269488798", "Size": "29", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2800,00",
                    "BrandReferencePriceExVAT": "2295,08",
                    "Discount": "55",
                    "NetPrice": "1032,79",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115825",
            "Model": "8017229",
            "Variant": "A2142",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Sweaters",
            "Code": "8017229A2142",
            "Color": "",
            "Composition": "100% COTTON/98% COTTON 2% ELASTANE",
            "SizeAndFit": " ",
            "MadeIn": "VIETNAM",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Burberry---8017229A2142.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Burberry---8017229A2142.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Burberry---8017229A2142_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Burberry---8017229A2142_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Burberry---8017229A2142_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Burberry---8017229A2142_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211811233305", "Size": "24", "Qty": "0" },
                { "Barcode": "210240558141", "Size": "25", "Qty": "0" },
                { "Barcode": "200623662073", "Size": "26", "Qty": "0" },
                { "Barcode": "200407602556", "Size": "27", "Qty": "0" },
                { "Barcode": "201610359647", "Size": "28", "Qty": "0" },
                { "Barcode": "210059476290", "Size": "29", "Qty": "0" },
                { "Barcode": "210142109317", "Size": "30", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "565,00",
                    "BrandReferencePriceExVAT": "463,11",
                    "Discount": "40",
                    "NetPrice": "277,87",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115826",
            "Model": "8008704",
            "Variant": "A1397",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Shirts",
            "Code": "8008704A1397",
            "Color": "Azzurro",
            "Composition": "97% COTTON 3% ELASTANE",
            "SizeAndFit": " ",
            "MadeIn": "THAILAND",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8008704A1397.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8008704A1397.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8008704A1397_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8008704A1397_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8008704A1397_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8008704A1397_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211442118161", "Size": "24", "Qty": "0" },
                { "Barcode": "210923418545", "Size": "25", "Qty": "0" },
                { "Barcode": "200717967052", "Size": "26", "Qty": "0" },
                { "Barcode": "201385919114", "Size": "27", "Qty": "0" },
                { "Barcode": "211890998042", "Size": "28", "Qty": "0" },
                { "Barcode": "210409339388", "Size": "29", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "695,00",
                    "BrandReferencePriceExVAT": "569,67",
                    "Discount": "40",
                    "NetPrice": "341,80",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115827",
            "Model": "8008703",
            "Variant": "A1464",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Shirts",
            "Code": "8008703A1464",
            "Color": "Bianco",
            "Composition": "97% COTTON 3% ELASTANE",
            "SizeAndFit": " ",
            "MadeIn": "THAILAND",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Burberry---8008703A1464.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Burberry---8008703A1464.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Burberry---8008703A1464_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Burberry---8008703A1464_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Burberry---8008703A1464_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Burberry---8008703A1464_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201780006112", "Size": "24", "Qty": "0" },
                { "Barcode": "200895970245", "Size": "25", "Qty": "0" },
                { "Barcode": "211966087568", "Size": "26", "Qty": "0" },
                { "Barcode": "210345024077", "Size": "27", "Qty": "0" },
                { "Barcode": "201651425234", "Size": "28", "Qty": "0" },
                { "Barcode": "201769731231", "Size": "29", "Qty": "0" },
                { "Barcode": "210039241875", "Size": "30", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "290,00",
                    "BrandReferencePriceExVAT": "237,70",
                    "Discount": "40",
                    "NetPrice": "142,62",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115828",
            "Model": "OWIA177E19D68105",
            "Variant": "0191",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Sneakers",
            "Code": "OWIA177E19D681050191",
            "Color": "Bianco",
            "Composition": "100% CALFSKIN ",
            "SizeAndFit": " ",
            "MadeIn": "ITALY ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWIA177E19D681050191.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWIA177E19D681050191.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWIA177E19D681050191_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWIA177E19D681050191_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWIA177E19D681050191_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWIA177E19D681050191_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201955966921", "Size": "46", "Qty": "0" },
                { "Barcode": "210984736170", "Size": "48", "Qty": "0" },
                { "Barcode": "211735482173", "Size": "50", "Qty": "0" },
                { "Barcode": "211234372993", "Size": "52", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1150,00",
                    "BrandReferencePriceExVAT": "942,62",
                    "Discount": "40",
                    "NetPrice": "565,57",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115829",
            "Model": "B41680",
            "Variant": "WHITIN/OWHITE/SCARLET",
            "Season": "AI19",
            "Brand": "Adidas",
            "Category": "Sneakers",
            "Code": "B41680WHITIN/OWHITE/SCARLET",
            "Color": "Bianco",
            "Composition": "Natural (Veg)->Cotton100 % Natural (other)->Rubber100 % Furs & Skins->Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---B41680WHITIN()OWHITE()SCARLET.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---B41680WHITIN()OWHITE()SCARLET.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---B41680WHITIN()OWHITE()SCARLET_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---B41680WHITIN()OWHITE()SCARLET_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---B41680WHITIN()OWHITE()SCARLET_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---B41680WHITIN()OWHITE()SCARLET_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210305473041", "Size": "38", "Qty": "-1" },
                { "Barcode": "210775116212", "Size": "4", "Qty": "1" },
                { "Barcode": "210432095884", "Size": "40", "Qty": "0" },
                { "Barcode": "201667136677", "Size": "6", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "260,00",
                    "BrandReferencePriceExVAT": "213,11",
                    "Discount": "40",
                    "NetPrice": "127,87",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115830",
            "Model": "DP84725DVTE4",
            "Variant": "D41OH",
            "Season": "AI19",
            "Brand": "Versace",
            "Category": "Bags..",
            "Code": "DP84725DVTE4D41OH",
            "Color": "",
            "Composition": "Furs & Skins->Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace---DP84725DVTE4D41OH.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace---DP84725DVTE4D41OH.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace---DP84725DVTE4D41OH_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace---DP84725DVTE4D41OH_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace---DP84725DVTE4D41OH_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace---DP84725DVTE4D41OH_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201912213062", "Size": "I", "Qty": "0" },
                { "Barcode": "201803635536", "Size": "II", "Qty": "0" },
                { "Barcode": "201764219281", "Size": "III", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "460,00",
                    "BrandReferencePriceExVAT": "377,05",
                    "Discount": "40",
                    "NetPrice": "226,23",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115831",
            "Model": "IFO1401IT03454",
            "Variant": "I7900",
            "Season": "AI19",
            "Brand": "Versace",
            "Category": "Scarfs",
            "Code": "IFO1401IT03454I7900",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace---IFO1401IT03454I7900.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace---IFO1401IT03454I7900.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace---IFO1401IT03454I7900_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace---IFO1401IT03454I7900_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200457172368", "Size": "40", "Qty": "0" },
                { "Barcode": "201881579162", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "550,00",
                    "BrandReferencePriceExVAT": "450,82",
                    "Discount": "40",
                    "NetPrice": "270,49",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115832",
            "Model": "8BT312A5DY",
            "Variant": "F15ZW",
            "Season": "AI19",
            "Brand": "Fendi",
            "Category": "Bags..",
            "Code": "8BT312A5DYF15ZW",
            "Color": "Nero",
            "Composition": "Furs & Skins->Lamb Skin100 % Furs & Skins->Calf Leather100 % Furs & Skins->Calf Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---FENDI---8BT312A5DYF15ZW.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---FENDI---8BT312A5DYF15ZW.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---FENDI---8BT312A5DYF15ZW_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---FENDI---8BT312A5DYF15ZW_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---FENDI---8BT312A5DYF15ZW_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---FENDI---8BT312A5DYF15ZW_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210224063126", "Size": "38", "Qty": "0" },
                { "Barcode": "210941673180", "Size": "40", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "550,00",
                    "BrandReferencePriceExVAT": "450,82",
                    "Discount": "40",
                    "NetPrice": "270,49",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115833",
            "Model": "G8KBAZG7TWF",
            "Variant": "N0000",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "T-shirts and Polos",
            "Code": "G8KBAZG7TWFN0000",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G8KBAZG7TWFN0000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G8KBAZG7TWFN0000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G8KBAZG7TWFN0000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G8KBAZG7TWFN0000_1_D.jpg"
                },
                {
                    "No": "7",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G8KBAZG7TWFN0000_6_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G8KBAZG7TWFN0000_6_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201046350739", "Size": "40", "Qty": "0" },
                { "Barcode": "211763960795", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "350,00",
                    "BrandReferencePriceExVAT": "286,89",
                    "Discount": "40",
                    "NetPrice": "172,13",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115834",
            "Model": "G8KBAZG7TWF",
            "Variant": "W0800",
            "Season": "AI19",
            "Brand": "Dolce & Gabbana",
            "Category": "T-shirts and Polos",
            "Code": "G8KBAZG7TWFW0800",
            "Color": "Bianco",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G8KBAZG7TWFW0800.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G8KBAZG7TWFW0800.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G8KBAZG7TWFW0800_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G8KBAZG7TWFW0800_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DOLCE () GABBANA---G8KBAZG7TWFW0800_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DOLCE () GABBANA---G8KBAZG7TWFW0800_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211329047077", "Size": "40", "Qty": "0" },
                { "Barcode": "211118404051", "Size": "42", "Qty": "0" },
                { "Barcode": "210046657131", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "330,00",
                    "BrandReferencePriceExVAT": "270,49",
                    "Discount": "40",
                    "NetPrice": "162,30",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115835",
            "Model": "4720110NPKK",
            "Variant": "1000",
            "Season": "AI19",
            "Brand": "Saint Laurent",
            "Category": "With Heel",
            "Code": "4720110NPKK1000",
            "Color": "Nero",
            "Composition": "Pelle",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---4720110NPKK1000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---4720110NPKK1000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---4720110NPKK1000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---4720110NPKK1000_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---4720110NPKK1000_2_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---4720110NPKK1000_2_P.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---4720110NPKK1000_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---4720110NPKK1000_3_P.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---4720110NPKK1000_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---4720110NPKK1000_4_P.jpg"
                },
                {
                    "No": "7",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---4720110NPKK1000_6_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---4720110NPKK1000_6_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201336487902", "Size": "40", "Qty": "0" },
                { "Barcode": "211656287652", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "812,00",
                    "BrandReferencePriceExVAT": "665,57",
                    "Discount": "48",
                    "NetPrice": "346,10",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115836",
            "Model": "581244W8416",
            "Variant": "9740",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Bags..",
            "Code": "581244W84169740",
            "Color": "Beige",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---581244W84169740.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---581244W84169740.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---581244W84169740_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---581244W84169740_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---581244W84169740_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---581244W84169740_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201847407403", "Size": "24", "Qty": "0" },
                { "Barcode": "211451498685", "Size": "25", "Qty": "0" },
                { "Barcode": "201699951796", "Size": "26", "Qty": "0" },
                { "Barcode": "210452204178", "Size": "27", "Qty": "0" },
                { "Barcode": "200884728203", "Size": "28", "Qty": "0" },
                { "Barcode": "211198663901", "Size": "29", "Qty": "0" },
                { "Barcode": "201230893465", "Size": "30", "Qty": "0" },
                { "Barcode": "210215077455", "Size": "31", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "595,00",
                    "BrandReferencePriceExVAT": "487,70",
                    "Discount": "55",
                    "NetPrice": "219,47",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115837",
            "Model": "V07035540",
            "Variant": "1219",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "T-shirts and Polos",
            "Code": "V070355401219",
            "Color": "",
            "Composition": "Cotton 100%",
            "SizeAndFit": " ",
            "MadeIn": "Portogallo",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V070355401219.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V070355401219.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V070355401219_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V070355401219_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---V070355401219_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---V070355401219_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200281333267", "Size": "40", "Qty": "0" },
                { "Barcode": "201188490299", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "895,00",
                    "BrandReferencePriceExVAT": "733,61",
                    "Discount": "55",
                    "NetPrice": "330,12",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115838",
            "Model": "8018535",
            "Variant": "A7026",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Sneakers",
            "Code": "8018535A7026",
            "Color": "",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8018535A7026.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8018535A7026.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8018535A7026_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8018535A7026_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8018535A7026_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8018535A7026_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210075403092", "Size": "40", "Qty": "0" },
                { "Barcode": "211349681841", "Size": "42", "Qty": "0" },
                { "Barcode": "211910703108", "Size": "42", "Qty": "0" },
                { "Barcode": "201633627567", "Size": "44", "Qty": "1" },
                { "Barcode": "210441159928", "Size": "44", "Qty": "0" },
                { "Barcode": "211705553213", "Size": "46", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "455,00",
                    "BrandReferencePriceExVAT": "372,95",
                    "Discount": "55",
                    "NetPrice": "167,83",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115839",
            "Model": "A77990MNAN07",
            "Variant": "1000170",
            "Season": "AI19",
            "Brand": "Sergio Rossi",
            "Category": "Flat shoes",
            "Code": "A77990MNAN071000170",
            "Color": "Nero",
            "Composition": "Furs & Skins->Leather100 % Furs & Skins->Leather100 % Furs & Skins->Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SERGIO ROSSI---A77990MNAN071000170.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SERGIO ROSSI---A77990MNAN071000170.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SERGIO ROSSI---A77990MNAN071000170_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SERGIO ROSSI---A77990MNAN071000170_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SERGIO ROSSI---A77990MNAN071000170_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SERGIO ROSSI---A77990MNAN071000170_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201781148645", "Size": "40", "Qty": "0" },
                { "Barcode": "211960385912", "Size": "42", "Qty": "0" },
                { "Barcode": "211958073519", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "520,00",
                    "BrandReferencePriceExVAT": "426,23",
                    "Discount": "55",
                    "NetPrice": "191,80",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115840",
            "Model": "8016301",
            "Variant": "A1189",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Sneakers",
            "Code": "8016301A1189",
            "Color": "",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8016301A1189.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8016301A1189.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8016301A1189_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8016301A1189_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8016301A1189_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8016301A1189_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200705154628", "Size": "40", "Qty": "0" },
                { "Barcode": "200044285808", "Size": "42", "Qty": "0" },
                { "Barcode": "201676819703", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "990,00",
                    "BrandReferencePriceExVAT": "811,48",
                    "Discount": "55",
                    "NetPrice": "365,16",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115841",
            "Model": "8BT313A5DY",
            "Variant": "F186A",
            "Season": "AI19",
            "Brand": "Fendi",
            "Category": "Bags..",
            "Code": "8BT313A5DYF186A",
            "Color": "",
            "Composition": "Furs & Skins->Lamb Skin100 % Furs & Skins->Calf Leather100 % Furs & Skins->Calf Leather100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Fendi---8BT313A5DYF186A.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Fendi---8BT313A5DYF186A.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Fendi---8BT313A5DYF186A_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Fendi---8BT313A5DYF186A_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Fendi---8BT313A5DYF186A_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Fendi---8BT313A5DYF186A_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211956887437", "Size": "40", "Qty": "0" },
                { "Barcode": "201867959452", "Size": "42", "Qty": "0" },
                { "Barcode": "200022812624", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "990,00",
                    "BrandReferencePriceExVAT": "811,48",
                    "Discount": "55",
                    "NetPrice": "365,16",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115842",
            "Model": "554773BRM0Y",
            "Variant": "1000",
            "Season": "AI19",
            "Brand": "Saint Laurent",
            "Category": "Belts",
            "Code": "554773BRM0Y1000",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---554773BRM0Y1000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---554773BRM0Y1000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---SAINT LAURENT---554773BRM0Y1000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---SAINT LAURENT---554773BRM0Y1000_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211613113407", "Size": "40", "Qty": "0" },
                { "Barcode": "201338054021", "Size": "42", "Qty": "0" },
                { "Barcode": "210938677598", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "795,00",
                    "BrandReferencePriceExVAT": "651,64",
                    "Discount": "55",
                    "NetPrice": "293,24",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115843",
            "Model": "OWPA011E19F14066",
            "Variant": "1024",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "I-Tech",
            "Code": "OWPA011E19F140661024",
            "Color": "",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off White---OWPA011E19F140661024.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off White---OWPA011E19F140661024.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off White---OWPA011E19F140661024_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off White---OWPA011E19F140661024_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210148764337", "Size": "40", "Qty": "0" },
                { "Barcode": "210407929584", "Size": "42", "Qty": "0" },
                { "Barcode": "210295887841", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "595,00",
                    "BrandReferencePriceExVAT": "487,70",
                    "Discount": "55",
                    "NetPrice": "219,47",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115844",
            "Model": "BH6016H0F6",
            "Variant": "001",
            "Season": "AI19",
            "Brand": "Givenchy",
            "Category": "Boots",
            "Code": "BH6016H0F6001",
            "Color": "Nero",
            "Composition": "100% CALFSKIN ",
            "SizeAndFit": " ",
            "MadeIn": "ITALY ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BH6016H0F6001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BH6016H0F6001.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BH6016H0F6001_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BH6016H0F6001_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Givenchy---BH6016H0F6001_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Givenchy---BH6016H0F6001_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210730520245", "Size": "40", "Qty": "0" },
                { "Barcode": "201448130298", "Size": "42", "Qty": "0" },
                { "Barcode": "211424345168", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "160,00",
                    "BrandReferencePriceExVAT": "131,15",
                    "Discount": "40",
                    "NetPrice": "78,69",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115845",
            "Model": "F962SW707962",
            "Variant": "22",
            "Season": "AI19",
            "Brand": "Kenzo",
            "Category": "Sweaters",
            "Code": "F962SW70796222",
            "Color": "Rosso",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Kenzo---F962SW70796222.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Kenzo---F962SW70796222.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Kenzo---F962SW70796222_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Kenzo---F962SW70796222_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Kenzo---F962SW70796222_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Kenzo---F962SW70796222_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211925077363", "Size": "40", "Qty": "0" },
                { "Barcode": "211458748757", "Size": "42", "Qty": "0" },
                { "Barcode": "210876626752", "Size": "44", "Qty": "0" },
                { "Barcode": "201302225161", "Size": "46", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "710,00",
                    "BrandReferencePriceExVAT": "581,97",
                    "Discount": "",
                    "NetPrice": "581,97",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115846",
            "Model": "OWHI016E19E78077",
            "Variant": "9100",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Dresses",
            "Code": "OWHI016E19E780779100",
            "Color": "Nero",
            "Composition": "65%viscose 25%polyeater 9%mettallic polyeater",
            "SizeAndFit": " ",
            "MadeIn": "Italy ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off White---OWHI016E19E780779100.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off White---OWHI016E19E780779100.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off White---OWHI016E19E780779100_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off White---OWHI016E19E780779100_1_D.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off White---OWHI016E19E780779100_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off White---OWHI016E19E780779100_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210430834540", "Size": "40", "Qty": "0" },
                { "Barcode": "200784569425", "Size": "42", "Qty": "0" },
                { "Barcode": "200434054417", "Size": "44", "Qty": "0" },
                { "Barcode": "210072407911", "Size": "46", "Qty": "0" },
                { "Barcode": "211364411741", "Size": "UNI", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "690,00",
                    "BrandReferencePriceExVAT": "565,57",
                    "Discount": "",
                    "NetPrice": "565,57",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115847",
            "Model": "OWHB006E19A28075",
            "Variant": "3020",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Sweaters",
            "Code": "OWHB006E19A280753020",
            "Color": "Blu",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWHB006E19A280753020.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWHB006E19A280753020.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWHB006E19A280753020_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWHB006E19A280753020_1_D.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWHB006E19A280753020_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWHB006E19A280753020_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210084374691", "Size": "38", "Qty": "0" },
                { "Barcode": "211520783426", "Size": "40", "Qty": "0" },
                { "Barcode": "211932403433", "Size": "42", "Qty": "0" },
                { "Barcode": "201114534429", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "290,00",
                    "BrandReferencePriceExVAT": "237,70",
                    "Discount": "40",
                    "NetPrice": "142,62",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115848",
            "Model": "29F674I18S192",
            "Variant": "F0002",
            "Season": "AI19",
            "Brand": "Prada",
            "Category": "Jackets",
            "Code": "29F674I18S192F0002",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Prada---29F674I18S192F0002.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Prada---29F674I18S192F0002.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Prada---29F674I18S192F0002_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Prada---29F674I18S192F0002_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Prada---29F674I18S192F0002_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Prada---29F674I18S192F0002_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201326074883", "Size": "42", "Qty": "0" },
                { "Barcode": "200043684937", "Size": "44", "Qty": "0" },
                { "Barcode": "200735152499", "Size": "46", "Qty": "0" },
                { "Barcode": "211172885229", "Size": "48", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "450,00",
                    "BrandReferencePriceExVAT": "368,85",
                    "Discount": "40",
                    "NetPrice": "221,31",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115849",
            "Model": "OWHE009E19B74068",
            "Variant": "10B4",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Dresses",
            "Code": "OWHE009E19B7406810B4",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWHE009E19B7406810B4.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWHE009E19B7406810B4.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWHE009E19B7406810B4_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWHE009E19B7406810B4_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWHE009E19B7406810B4_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWHE009E19B7406810B4_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201962631658", "Size": "34", "Qty": "0" },
                { "Barcode": "210294455344", "Size": "36", "Qty": "0" },
                { "Barcode": "201556001500", "Size": "38", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1400,00",
                    "BrandReferencePriceExVAT": "1147,54",
                    "Discount": "40",
                    "NetPrice": "688,52",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115850",
            "Model": "S75FB0091S52061",
            "Variant": "001F",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Jackets",
            "Code": "S75FB0091S52061001F",
            "Color": "Marrone",
            "Composition": "Synthetic->Polyester34 % Synthetic->Modacrylic19 % Synthetic->Acrylic47 % Natural (Veg)->Cotton100 % Natural (Veg)->Cotton100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S75FB0091S52061001F.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S75FB0091S52061001F.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S75FB0091S52061001F_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S75FB0091S52061001F_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---S75FB0091S52061001F_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---S75FB0091S52061001F_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211276058173", "Size": "34", "Qty": "0" },
                { "Barcode": "210347137372", "Size": "36", "Qty": "0" },
                { "Barcode": "211913176209", "Size": "38", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1400,00",
                    "BrandReferencePriceExVAT": "1147,54",
                    "Discount": "40",
                    "NetPrice": "688,52",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115851",
            "Model": "581823SMB11",
            "Variant": "1000",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Coats",
            "Code": "581823SMB111000",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---581823SMB111000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---581823SMB111000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---581823SMB111000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---581823SMB111000_1_D.jpg"
                },
                {
                    "No": "5",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---581823SMB111000_4_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---581823SMB111000_4_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210205801460", "Size": "40", "Qty": "0" },
                { "Barcode": "210350896254", "Size": "42", "Qty": "0" },
                { "Barcode": "200368580373", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "795,00",
                    "BrandReferencePriceExVAT": "651,64",
                    "Discount": "40",
                    "NetPrice": "390,98",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115852",
            "Model": "573948SLA03",
            "Variant": "9500",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Dresses",
            "Code": "573948SLA039500",
            "Color": "Bianco",
            "Composition": "Natural (other)->Silk100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---573948SLA039500.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---573948SLA039500.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---573948SLA039500_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---573948SLA039500_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---573948SLA039500_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---573948SLA039500_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210085742575", "Size": "40", "Qty": "0" },
                { "Barcode": "200626809025", "Size": "42", "Qty": "0" },
                { "Barcode": "200351951661", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "590,00",
                    "BrandReferencePriceExVAT": "483,61",
                    "Discount": "55",
                    "NetPrice": "217,62",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115853",
            "Model": "CHC19AMA27072",
            "Variant": "48B",
            "Season": "AI19",
            "Brand": "Chloè",
            "Category": "Coats",
            "Code": "CHC19AMA2707248B",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19AMA2707248B.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19AMA2707248B.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19AMA2707248B_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19AMA2707248B_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Chloe---CHC19AMA2707248B_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Chloe---CHC19AMA2707248B_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201577043869", "Size": "38", "Qty": "0" },
                { "Barcode": "200548308116", "Size": "40", "Qty": "0" },
                { "Barcode": "200861232601", "Size": "40", "Qty": "0" },
                { "Barcode": "200221067541", "Size": "42", "Qty": "0" },
                { "Barcode": "201413532944", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "118,00",
                    "BrandReferencePriceExVAT": "96,72",
                    "Discount": "55",
                    "NetPrice": "43,52",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115854",
            "Model": "567071SHB55",
            "Variant": "1000",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Jackets",
            "Code": "567071SHB551000",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---567071SHB551000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---567071SHB551000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---567071SHB551000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---567071SHB551000_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---567071SHB551000_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---567071SHB551000_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200392382585", "Size": "38", "Qty": "1" },
                { "Barcode": "211778484760", "Size": "40", "Qty": "0" },
                { "Barcode": "210099090077", "Size": "42", "Qty": "0" },
                { "Barcode": "200112492497", "Size": "44", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "299,00",
                    "BrandReferencePriceExVAT": "245,08",
                    "Discount": "55",
                    "NetPrice": "110,29",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115855",
            "Model": "B6HUA790S0592",
            "Variant": "899",
            "Season": "AI19",
            "Brand": "Versace Jeans",
            "Category": "Sweaters",
            "Code": "B6HUA790S0592899",
            "Color": "Giallo",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace Collection---B6HUA790S0592899.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace Collection---B6HUA790S0592899.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace Collection---B6HUA790S0592899_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace Collection---B6HUA790S0592899_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace Collection---B6HUA790S0592899_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace Collection---B6HUA790S0592899_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200927136596", "Size": "38", "Qty": "0" },
                { "Barcode": "210025335664", "Size": "40", "Qty": "0" },
                { "Barcode": "211264397530", "Size": "42", "Qty": "0" },
                { "Barcode": "211500362121", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "299,00",
                    "BrandReferencePriceExVAT": "245,08",
                    "Discount": "55",
                    "NetPrice": "110,29",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115856",
            "Model": "575251SNA34",
            "Variant": "1000",
            "Season": "AI19",
            "Brand": "Stella McCartney",
            "Category": "Dresses",
            "Code": "575251SNA341000",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---575251SNA341000.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---575251SNA341000.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---575251SNA341000_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---575251SNA341000_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---STELLA MCCARTNEY---575251SNA341000_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---STELLA MCCARTNEY---575251SNA341000_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210784230721", "Size": "5½", "Qty": "0" },
                { "Barcode": "211301469322", "Size": "6", "Qty": "0" },
                { "Barcode": "211267509284", "Size": "6½", "Qty": "0" },
                { "Barcode": "211556139354", "Size": "7", "Qty": "0" },
                { "Barcode": "211692132390", "Size": "7½", "Qty": "0" },
                { "Barcode": "201517796395", "Size": "8", "Qty": "0" },
                { "Barcode": "211357750270", "Size": "8½", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2568,00",
                    "BrandReferencePriceExVAT": "2104,92",
                    "Discount": "55",
                    "NetPrice": "947,21",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115857",
            "Model": "OWCD009E19E02095",
            "Variant": "1001",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Trousers",
            "Code": "OWCD009E19E020951001",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWCD009E19E020951001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWCD009E19E020951001.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWCD009E19E020951001_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWCD009E19E020951001_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWCD009E19E020951001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWCD009E19E020951001_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201755827777", "Size": "M", "Qty": "0" },
                { "Barcode": "210807931332", "Size": "S", "Qty": "0" },
                { "Barcode": "210721082217", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "498,00",
                    "BrandReferencePriceExVAT": "408,20",
                    "Discount": "55",
                    "NetPrice": "183,69",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115858",
            "Model": "D5HUA161S0537",
            "Variant": "899",
            "Season": "AI19",
            "Brand": "Versace Jeans",
            "Category": "Trousers",
            "Code": "D5HUA161S0537899",
            "Color": "Nero",
            "Composition": "Synthetic->Polyester83 % Synthetic->Spandex/Elastane17 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace Collection---D5HUA161S0537899.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace Collection---D5HUA161S0537899.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace Collection---D5HUA161S0537899_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace Collection---D5HUA161S0537899_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace Collection---D5HUA161S0537899_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace Collection---D5HUA161S0537899_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200200248984", "Size": "L", "Qty": "0" },
                { "Barcode": "200131713363", "Size": "M", "Qty": "0" },
                { "Barcode": "201050896053", "Size": "S", "Qty": "0" },
                { "Barcode": "201934724820", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1195,00",
                    "BrandReferencePriceExVAT": "979,51",
                    "Discount": "55",
                    "NetPrice": "440,78",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115859",
            "Model": "BCM400105C00001",
            "Variant": "M002",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "BCM400105C00001M002",
            "Color": "Nero",
            "Composition": "Natural (Veg)->Cotton100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M002.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M002.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M002_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M002_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M002_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M002_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210962075075", "Size": "M", "Qty": "0" },
                { "Barcode": "211139145282", "Size": "S", "Qty": "0" },
                { "Barcode": "211642023665", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "115,00",
                    "BrandReferencePriceExVAT": "94,26",
                    "Discount": "48",
                    "NetPrice": "49,02",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115860",
            "Model": "BCM022205C00001",
            "Variant": "M1386",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "BCM022205C00001M1386",
            "Color": "Blu",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM022205C00001M1386.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM022205C00001M1386.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM022205C00001M1386_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM022205C00001M1386_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM022205C00001M1386_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM022205C00001M1386_3_P.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "201416568860", "Size": "TU", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "690,00",
                    "BrandReferencePriceExVAT": "565,57",
                    "Discount": "32",
                    "NetPrice": "384,59",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115861",
            "Model": "BCM400105C00001",
            "Variant": "M063",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "BCM400105C00001M063",
            "Color": "Nero",
            "Composition": "Synthetic->Polyester100 % Natural (Veg)->Cotton100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M063.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M063.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M063_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M063_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M063_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M063_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211882894513", "Size": "36", "Qty": "0" },
                { "Barcode": "211031934212", "Size": "38", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1330,00",
                    "BrandReferencePriceExVAT": "1090,16",
                    "Discount": "32",
                    "NetPrice": "741,31",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115862",
            "Model": "BCM021405C00001",
            "Variant": "4065",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "BCM021405C000014065",
            "Color": "Rosso",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM021405C000014065.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM021405C000014065.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM021405C000014065_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM021405C000014065_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM021405C000014065_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM021405C000014065_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200137906400", "Size": "L", "Qty": "0" },
                { "Barcode": "211420296348", "Size": "M", "Qty": "0" },
                { "Barcode": "210442470759", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "499,00",
                    "BrandReferencePriceExVAT": "409,02",
                    "Discount": "32",
                    "NetPrice": "278,13",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115863",
            "Model": "BCM400105C00001",
            "Variant": "M1498",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "BCM400105C00001M1498",
            "Color": "Rosso",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M1498.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M1498.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M1498_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M1498_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M1498_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M1498_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201554779595", "Size": "25", "Qty": "0" },
                { "Barcode": "200556338570", "Size": "26", "Qty": "1" },
                { "Barcode": "211227539022", "Size": "27", "Qty": "0" },
                { "Barcode": "201525978285", "Size": "28", "Qty": "0" },
                { "Barcode": "201945149075", "Size": "29", "Qty": "1" },
                { "Barcode": "211893593982", "Size": "30", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "185,00",
                    "BrandReferencePriceExVAT": "151,64",
                    "Discount": "32",
                    "NetPrice": "103,11",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115864",
            "Model": "F665TS1524BD",
            "Variant": "99",
            "Season": "AI19",
            "Brand": "Kenzo",
            "Category": "T-shirts and Polos",
            "Code": "F665TS1524BD99",
            "Color": "Nero",
            "Composition": "100% cotton",
            "SizeAndFit": " ",
            "MadeIn": "Portugal",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Kenzo---F665TS1524BD99.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Kenzo---F665TS1524BD99.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Kenzo---F665TS1524BD99_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Kenzo---F665TS1524BD99_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Kenzo---F665TS1524BD99_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Kenzo---F665TS1524BD99_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210621210475", "Size": "25", "Qty": "0" },
                { "Barcode": "210056430583", "Size": "26", "Qty": "0" },
                { "Barcode": "210446800063", "Size": "27", "Qty": "0" },
                { "Barcode": "200119559486", "Size": "28", "Qty": "0" },
                { "Barcode": "211821107182", "Size": "29", "Qty": "0" },
                { "Barcode": "210837169543", "Size": "30", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1490,00",
                    "BrandReferencePriceExVAT": "1221,31",
                    "Discount": "32",
                    "NetPrice": "830,49",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115865",
            "Model": "BCM022505C00001",
            "Variant": "2124",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "BCM022505C000012124",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---BCM022505C000012124.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---BCM022505C000012124.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---BCM022505C000012124_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---BCM022505C000012124_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---BCM022505C000012124_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---BCM022505C000012124_3_P.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "210179503611", "Size": "42", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "599,00",
                    "BrandReferencePriceExVAT": "490,98",
                    "Discount": "32",
                    "NetPrice": "333,87",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115866",
            "Model": "BCM021705C00001",
            "Variant": "5138",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "BCM021705C000015138",
            "Color": "Beige",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM021705C000015138.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM021705C000015138.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM021705C000015138_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM021705C000015138_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM021705C000015138_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM021705C000015138_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210017637175", "Size": "42", "Qty": "0" },
                { "Barcode": "211452857283", "Size": "44", "Qty": "0" },
                { "Barcode": "200735247227", "Size": "46", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "595,00",
                    "BrandReferencePriceExVAT": "487,70",
                    "Discount": "32",
                    "NetPrice": "331,64",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115867",
            "Model": "BCM021405C00001",
            "Variant": "M1751",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "BCM021405C00001M1751",
            "Color": "Verde",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---BCM021405C00001M1751.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---BCM021405C00001M1751.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---BCM021405C00001M1751_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---BCM021405C00001M1751_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Dsquared2---BCM021405C00001M1751_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Dsquared2---BCM021405C00001M1751_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210233639647", "Size": "42", "Qty": "0" },
                { "Barcode": "201147167940", "Size": "44", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "235,00",
                    "BrandReferencePriceExVAT": "192,62",
                    "Discount": "32",
                    "NetPrice": "130,98",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115868",
            "Model": "KNM000115040001",
            "Variant": "M063",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "KNM000115040001M063",
            "Color": "Nero",
            "Composition": "Wool or fine animal hair->Wool100 % Synthetic->Polyester100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---KNM000115040001M063.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---KNM000115040001M063.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---KNM000115040001M063_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---KNM000115040001M063_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210043104446", "Size": "L", "Qty": "1" },
                { "Barcode": "201660681033", "Size": "M", "Qty": "1" },
                { "Barcode": "200274106727", "Size": "S", "Qty": "1" },
                { "Barcode": "200568343974", "Size": "XL", "Qty": "1" },
                { "Barcode": "200667530379", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "199,00",
                    "BrandReferencePriceExVAT": "163,11",
                    "Discount": "32",
                    "NetPrice": "110,92",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115869",
            "Model": "BCM400105C00001",
            "Variant": "M090",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "BCM400105C00001M090",
            "Color": "",
            "Composition": "Natural (Veg)->Cotton100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M090.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M090.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M090_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M090_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM400105C00001M090_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM400105C00001M090_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200698618548", "Size": "38", "Qty": "0" },
                { "Barcode": "210458445125", "Size": "40", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "199,00",
                    "BrandReferencePriceExVAT": "163,11",
                    "Discount": "32",
                    "NetPrice": "110,92",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115870",
            "Model": "BCM002805C00001",
            "Variant": "M063",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "BCM002805C00001M063",
            "Color": "Nero",
            "Composition": "Natural (Veg)->Cotton100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM002805C00001M063.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM002805C00001M063.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM002805C00001M063_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM002805C00001M063_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---BCM002805C00001M063_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---BCM002805C00001M063_2_D.jpg"
                },
                {
                    "No": "12",
                    "PictureUrl": "https://www.atelieronweb.com/foto/A19---DSQUARED2---BCM002805C00001M063_11_P.JPG",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_A19---DSQUARED2---BCM002805C00001M063_11_P.JPG"
                },
                {
                    "No": "13",
                    "PictureUrl": "https://www.atelieronweb.com/foto/A19---DSQUARED2---BCM002805C00001M063_12_P.JPG",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_A19---DSQUARED2---BCM002805C00001M063_12_P.JPG"
                }
            ],
            "Inventory": [
                { "Barcode": "211489722069", "Size": "38", "Qty": "0" },
                { "Barcode": "200767001386", "Size": "40", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "89,00",
                    "BrandReferencePriceExVAT": "72,95",
                    "Discount": "32",
                    "NetPrice": "49,61",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115871",
            "Model": "KNM000113620001",
            "Variant": "M063",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "KNM000113620001M063",
            "Color": "Nero",
            "Composition": "Wool or fine animal hair->Wool100 % Synthetic->Polyester100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---KNM000113620001M063.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---KNM000113620001M063.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---KNM000113620001M063_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---KNM000113620001M063_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211476945909", "Size": "44", "Qty": "0" },
                { "Barcode": "201654795385", "Size": "48", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "239,00",
                    "BrandReferencePriceExVAT": "195,90",
                    "Discount": "32",
                    "NetPrice": "133,21",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115872",
            "Model": "KNM000115040001",
            "Variant": "M084",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "KNM000115040001M084",
            "Color": "Nero",
            "Composition": "Wool or fine animal hair->Wool100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---KNM000115040001M084.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---KNM000115040001M084.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---KNM000115040001M084_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---KNM000115040001M084_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211017707230", "Size": "31", "Qty": "0" },
                { "Barcode": "211750450156", "Size": "32", "Qty": "0" },
                { "Barcode": "211207563649", "Size": "33", "Qty": "0" },
                { "Barcode": "211292585939", "Size": "34", "Qty": "0" },
                { "Barcode": "211460548973", "Size": "35", "Qty": "0" },
                { "Barcode": "211739793513", "Size": "36", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "99,00",
                    "BrandReferencePriceExVAT": "81,15",
                    "Discount": "32",
                    "NetPrice": "55,18",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115873",
            "Model": "CMPA012E19008039",
            "Variant": "1088",
            "Season": "AI19",
            "Brand": "Marcelo Burlon",
            "Category": "I-Tech",
            "Code": "CMPA012E190080391088",
            "Color": "Nero",
            "Composition": "Synthetic->Acrylic100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MARCELO BURLON---CMPA012E190080391088.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MARCELO BURLON---CMPA012E190080391088.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MARCELO BURLON---CMPA012E190080391088_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MARCELO BURLON---CMPA012E190080391088_1_D.jpg"
                }
            ],
            "Inventory": [{ "Barcode": "200411848184", "Size": "UNI", "Qty": "0" }],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "199,00",
                    "BrandReferencePriceExVAT": "163,11",
                    "Discount": "32",
                    "NetPrice": "110,92",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115874",
            "Model": "CMPA012E19008040",
            "Variant": "1088",
            "Season": "AI19",
            "Brand": "Marcelo Burlon",
            "Category": "I-Tech",
            "Code": "CMPA012E190080401088",
            "Color": "Nero",
            "Composition": "Synthetic->Acrylic100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MARCELO BURLON---CMPA012E190080401088.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MARCELO BURLON---CMPA012E190080401088.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MARCELO BURLON---CMPA012E190080401088_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MARCELO BURLON---CMPA012E190080401088_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200546815851", "Size": "40", "Qty": "0" },
                { "Barcode": "211812621719", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "199,00",
                    "BrandReferencePriceExVAT": "163,11",
                    "Discount": "32",
                    "NetPrice": "110,92",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115875",
            "Model": "KNM000105M02265",
            "Variant": "6047",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "KNM000105M022656047",
            "Color": "Arancio",
            "Composition": "Wool or fine animal hair->Wool50 % Synthetic->Acrylic50 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---KNM000105M022656047.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---KNM000105M022656047.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---KNM000105M022656047_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---KNM000105M022656047_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201125817312", "Size": "40", "Qty": "0" },
                { "Barcode": "201516186792", "Size": "42", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "239,00",
                    "BrandReferencePriceExVAT": "195,90",
                    "Discount": "32",
                    "NetPrice": "133,21",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115876",
            "Model": "KNM000105M02265",
            "Variant": "7042",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Hats",
            "Code": "KNM000105M022657042",
            "Color": "Giallo",
            "Composition": "Wool or fine animal hair->Wool50 % Synthetic->Acrylic50 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---KNM000105M022657042.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---KNM000105M022657042.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---KNM000105M022657042_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---KNM000105M022657042_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211751985697", "Size": "30", "Qty": "0" },
                { "Barcode": "200859965229", "Size": "31", "Qty": "1" },
                { "Barcode": "210485212841", "Size": "32", "Qty": "0" },
                { "Barcode": "211832899525", "Size": "33", "Qty": "0" },
                { "Barcode": "200545282410", "Size": "34", "Qty": "0" },
                { "Barcode": "211967944765", "Size": "35", "Qty": "0" },
                { "Barcode": "211577575285", "Size": "36", "Qty": "0" },
                { "Barcode": "200852828534", "Size": "38", "Qty": "0" },
                { "Barcode": "210044377660", "Size": "UNI", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "199,00",
                    "BrandReferencePriceExVAT": "163,11",
                    "Discount": "32",
                    "NetPrice": "110,92",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115877",
            "Model": "SCM001305M01040",
            "Variant": "M063",
            "Season": "AI19",
            "Brand": "Dsquared2",
            "Category": "Scarfs",
            "Code": "SCM001305M01040M063",
            "Color": "Nero",
            "Composition": "Wool or fine animal hair->Wool70 % Synthetic->Polyester30 %",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---SCM001305M01040M063.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---SCM001305M01040M063.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---DSQUARED2---SCM001305M01040M063_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---DSQUARED2---SCM001305M01040M063_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200034750630", "Size": "L", "Qty": "0" },
                { "Barcode": "201205859070", "Size": "M", "Qty": "0" },
                { "Barcode": "211596228551", "Size": "S", "Qty": "0" },
                { "Barcode": "201031448657", "Size": "XL", "Qty": "0" },
                { "Barcode": "201421818137", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "239,00",
                    "BrandReferencePriceExVAT": "195,90",
                    "Discount": "32",
                    "NetPrice": "133,21",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115878",
            "Model": "DG57491DJMS",
            "Variant": "D41OH",
            "Season": "AI19",
            "Brand": "Versace",
            "Category": "Bijoux",
            "Code": "DG57491DJMSD41OH",
            "Color": "Oro",
            "Composition": "Metals & Alloys->Metallic Fibre100 %",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace---DG57491DJMSD41OH.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace---DG57491DJMSD41OH.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Versace---DG57491DJMSD41OH_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Versace---DG57491DJMSD41OH_1_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211092887073", "Size": "L", "Qty": "0" },
                { "Barcode": "200591236084", "Size": "M", "Qty": "0" },
                { "Barcode": "201308846138", "Size": "S", "Qty": "0" },
                { "Barcode": "210026456194", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "89,00",
                    "BrandReferencePriceExVAT": "72,95",
                    "Discount": "32",
                    "NetPrice": "49,61",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115879",
            "Model": "HXW00N0BY10CR0",
            "Variant": "C407",
            "Season": "AI19",
            "Brand": "Hogan",
            "Category": "Sneakers",
            "Code": "HXW00N0BY10CR0C407",
            "Color": "Beige",
            "Composition": "Pelle, gomma",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW00N0BY10CR0C407.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW00N0BY10CR0C407.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW00N0BY10CR0C407_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW00N0BY10CR0C407_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW00N0BY10CR0C407_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW00N0BY10CR0C407_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200794569339", "Size": "L", "Qty": "0" },
                { "Barcode": "201965677779", "Size": "M", "Qty": "0" },
                { "Barcode": "200683287832", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "239,00",
                    "BrandReferencePriceExVAT": "195,90",
                    "Discount": "32",
                    "NetPrice": "133,21",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115880",
            "Model": "HXW00N0564025Q",
            "Variant": "9999",
            "Season": "AI19",
            "Brand": "Hogan",
            "Category": "Sneakers",
            "Code": "HXW00N0564025Q9999",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW00N0564025Q9999.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW00N0564025Q9999.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW00N0564025Q9999_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW00N0564025Q9999_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW00N0564025Q9999_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW00N0564025Q9999_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200356047258", "Size": "L", "Qty": "0" },
                { "Barcode": "210181636848", "Size": "M", "Qty": "0" },
                { "Barcode": "211854396274", "Size": "S", "Qty": "0" },
                { "Barcode": "201289616380", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "239,00",
                    "BrandReferencePriceExVAT": "195,90",
                    "Discount": "32",
                    "NetPrice": "133,21",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115881",
            "Model": "HXW3850BF51LN5",
            "Variant": "0564",
            "Season": "AI19",
            "Brand": "Hogan",
            "Category": "Sneakers",
            "Code": "HXW3850BF51LN50564",
            "Color": "Nero",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW3850BF51LN50564.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW3850BF51LN50564.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW3850BF51LN50564_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW3850BF51LN50564_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW3850BF51LN50564_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW3850BF51LN50564_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200070355339", "Size": "L", "Qty": "0" },
                { "Barcode": "200460724819", "Size": "M", "Qty": "0" },
                { "Barcode": "211178334875", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "200,00",
                    "BrandReferencePriceExVAT": "163,93",
                    "Discount": "32",
                    "NetPrice": "111,48",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115882",
            "Model": "XXM52B0AW50RE0",
            "Variant": "S402",
            "Season": "AI19",
            "Brand": "Tod's",
            "Category": "Flat shoes",
            "Code": "XXM52B0AW50RE0S402",
            "Color": "Marrone",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---TOD''S---XXM52B0AW50RE0S402.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---TOD''S---XXM52B0AW50RE0S402.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---TOD''S---XXM52B0AW50RE0S402_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---TOD''S---XXM52B0AW50RE0S402_1_D.jpg"
                },
                {
                    "No": "8",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---TOD''S---XXM52B0AW50RE0S402_7_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---TOD''S---XXM52B0AW50RE0S402_7_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211568704355", "Size": "M", "Qty": "0" },
                { "Barcode": "211959073835", "Size": "S", "Qty": "0" },
                { "Barcode": "200676683886", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "200,00",
                    "BrandReferencePriceExVAT": "163,93",
                    "Discount": "32",
                    "NetPrice": "111,48",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115883",
            "Model": "XXM52B0AW50RE0",
            "Variant": "9997",
            "Season": "AI19",
            "Brand": "Tod's",
            "Category": "Flat shoes",
            "Code": "XXM52B0AW50RE09997",
            "Color": "Blu",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---TOD''S---XXM52B0AW50RE09997.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---TOD''S---XXM52B0AW50RE09997.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---TOD''S---XXM52B0AW50RE09997_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---TOD''S---XXM52B0AW50RE09997_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---TOD''S---XXM52B0AW50RE09997_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---TOD''S---XXM52B0AW50RE09997_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201699215618", "Size": "L", "Qty": "0" },
                { "Barcode": "210416825674", "Size": "M", "Qty": "0" },
                { "Barcode": "200089585098", "Size": "S", "Qty": "0" },
                { "Barcode": "210807195154", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "200,00",
                    "BrandReferencePriceExVAT": "163,93",
                    "Discount": "32",
                    "NetPrice": "111,48",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115884",
            "Model": "XXM45A00D80RE0",
            "Variant": "U805",
            "Season": "AI19",
            "Brand": "Tod's",
            "Category": "Flat shoes",
            "Code": "XXM45A00D80RE0U805",
            "Color": "Blu",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---TOD''S---XXM45A00D80RE0U805.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---TOD''S---XXM45A00D80RE0U805.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---TOD''S---XXM45A00D80RE0U805_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---TOD''S---XXM45A00D80RE0U805_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---TOD''S---XXM45A00D80RE0U805_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---TOD''S---XXM45A00D80RE0U805_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211784663422", "Size": "L", "Qty": "0" },
                { "Barcode": "201847792326", "Size": "M", "Qty": "0" },
                { "Barcode": "200295336525", "Size": "S", "Qty": "0" },
                { "Barcode": "201673381914", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "200,00",
                    "BrandReferencePriceExVAT": "163,93",
                    "Discount": "32",
                    "NetPrice": "111,48",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115885",
            "Model": "XXM45A00D80RE0",
            "Variant": "S818",
            "Season": "AI19",
            "Brand": "Tod's",
            "Category": "Flat shoes",
            "Code": "XXM45A00D80RE0S818",
            "Color": "Marrone",
            "Composition": "",
            "SizeAndFit": " ",
            "MadeIn": "",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Tod's---XXM45A00D80RE0S818.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Tod's---XXM45A00D80RE0S818.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Tod's---XXM45A00D80RE0S818_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Tod's---XXM45A00D80RE0S818_1_D.jpg"
                },
                {
                    "No": "8",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Tod's---XXM45A00D80RE0S818_7_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Tod's---XXM45A00D80RE0S818_7_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210279710463", "Size": "L", "Qty": "0" },
                { "Barcode": "201114820945", "Size": "M", "Qty": "0" },
                { "Barcode": "211952469889", "Size": "S", "Qty": "0" },
                { "Barcode": "200084460659", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "200,00",
                    "BrandReferencePriceExVAT": "163,93",
                    "Discount": "32",
                    "NetPrice": "111,48",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115886",
            "Model": "HXW00N0BY10CR0",
            "Variant": "B800",
            "Season": "AI19",
            "Brand": "Hogan",
            "Category": "Sneakers",
            "Code": "HXW00N0BY10CR0B800",
            "Color": "Grigio",
            "Composition": "Pelle, gomma",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Hogan---HXW00N0BY10CR0B800.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Hogan---HXW00N0BY10CR0B800.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Hogan---HXW00N0BY10CR0B800_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Hogan---HXW00N0BY10CR0B800_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Hogan---HXW00N0BY10CR0B800_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Hogan---HXW00N0BY10CR0B800_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201669180318", "Size": "L", "Qty": "0" },
                { "Barcode": "211167529333", "Size": "M", "Qty": "0" },
                { "Barcode": "210840288759", "Size": "S", "Qty": "0" },
                { "Barcode": "211557898813", "Size": "XL", "Qty": "0" },
                { "Barcode": "211230658239", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "200,00",
                    "BrandReferencePriceExVAT": "163,93",
                    "Discount": "32",
                    "NetPrice": "111,48",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115887",
            "Model": "HXW00N0J092LF7",
            "Variant": "B999",
            "Season": "AI19",
            "Brand": "Hogan",
            "Category": "Sneakers",
            "Code": "HXW00N0J092LF7B999",
            "Color": "Nero",
            "Composition": "Pelle, gomma",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW00N0J092LF7B999.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW00N0J092LF7B999.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW00N0J092LF7B999_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW00N0J092LF7B999_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---HOGAN---HXW00N0J092LF7B999_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---HOGAN---HXW00N0J092LF7B999_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200063751393", "Size": "L", "Qty": "0" },
                { "Barcode": "201705078735", "Size": "M", "Qty": "0" },
                { "Barcode": "200454120873", "Size": "S", "Qty": "0" },
                { "Barcode": "200844490353", "Size": "XL", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "99,00",
                    "BrandReferencePriceExVAT": "81,15",
                    "Discount": "32",
                    "NetPrice": "55,18",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115888",
            "Model": "HXW00N05640LF5",
            "Variant": "M002",
            "Season": "AI19",
            "Brand": "Hogan",
            "Category": "Sneakers",
            "Code": "HXW00N05640LF5M002",
            "Color": "Oro",
            "Composition": "Pelle, gomma",
            "SizeAndFit": " ",
            "MadeIn": "ITALIA",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Hogan---HXW00N05640LF5M002.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Hogan---HXW00N05640LF5M002.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Hogan---HXW00N05640LF5M002_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Hogan---HXW00N05640LF5M002_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Hogan---HXW00N05640LF5M002_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Hogan---HXW00N05640LF5M002_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211948268293", "Size": "L", "Qty": "0" },
                { "Barcode": "200665878345", "Size": "M", "Qty": "0" },
                { "Barcode": "200338637770", "Size": "S", "Qty": "0" },
                { "Barcode": "201056247825", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "199,00",
                    "BrandReferencePriceExVAT": "163,11",
                    "Discount": "32",
                    "NetPrice": "110,92",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115889",
            "Model": "OWNA048E19423107",
            "Variant": "1001",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Bags..",
            "Code": "OWNA048E194231071001",
            "Color": "Nero",
            "Composition": "100% Calfskin  ",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA048E194231071001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA048E194231071001.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA048E194231071001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA048E194231071001_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA048E194231071001_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA048E194231071001_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200729007250", "Size": "L", "Qty": "0" },
                { "Barcode": "201446617304", "Size": "M", "Qty": "0" },
                { "Barcode": "210164227360", "Size": "S", "Qty": "0" },
                { "Barcode": "210865627635", "Size": "XL", "Qty": "0" },
                { "Barcode": "210554596840", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "199,00",
                    "BrandReferencePriceExVAT": "163,11",
                    "Discount": "32",
                    "NetPrice": "110,92",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115890",
            "Model": "OWNA011E19423107",
            "Variant": "1001",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Bags..",
            "Code": "OWNA011E194231071001",
            "Color": "Nero",
            "Composition": "100% Calfskin",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA011E194231071001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA011E194231071001.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA011E194231071001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA011E194231071001_2_D.jpg"
                },
                {
                    "No": "6",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA011E194231071001_5_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA011E194231071001_5_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210486840205", "Size": "L", "Qty": "0" },
                { "Barcode": "211267579164", "Size": "M", "Qty": "0" },
                { "Barcode": "201985189217", "Size": "S", "Qty": "0" },
                { "Barcode": "211642788104", "Size": "XL", "Qty": "0" },
                { "Barcode": "211657948644", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "89,00",
                    "BrandReferencePriceExVAT": "72,95",
                    "Discount": "32",
                    "NetPrice": "49,61",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115891",
            "Model": "OWNB007E19423107",
            "Variant": "1001",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Bags..",
            "Code": "OWNB007E194231071001",
            "Color": "Nero",
            "Composition": "100% Calfskin  ",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNB007E194231071001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNB007E194231071001.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNB007E194231071001_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNB007E194231071001_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNB007E194231071001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNB007E194231071001_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200375558696", "Size": "L", "Qty": "0" },
                { "Barcode": "211093168752", "Size": "M", "Qty": "0" },
                { "Barcode": "200765928176", "Size": "S", "Qty": "0" },
                { "Barcode": "211483538232", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "89,00",
                    "BrandReferencePriceExVAT": "72,95",
                    "Discount": "32",
                    "NetPrice": "49,61",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115892",
            "Model": "OWNB007E19423107",
            "Variant": "0210",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Bags..",
            "Code": "OWNB007E194231070210",
            "Color": "Beige",
            "Composition": "100% Calfskin  ",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNB007E194231070210.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNB007E194231070210.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNB007E194231070210_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNB007E194231070210_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNB007E194231070210_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNB007E194231070210_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200927984473", "Size": "L", "Qty": "2" },
                { "Barcode": "211873907712", "Size": "L", "Qty": "0" },
                { "Barcode": "210591517766", "Size": "M", "Qty": "0" },
                { "Barcode": "210675312286", "Size": "M", "Qty": "1" },
                { "Barcode": "210264277191", "Size": "S", "Qty": "0" },
                { "Barcode": "200511199209", "Size": "XL", "Qty": "2" },
                { "Barcode": "200981887243", "Size": "XS", "Qty": "0" },
                { "Barcode": "200262220412", "Size": "XXL", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "99,00",
                    "BrandReferencePriceExVAT": "81,15",
                    "Discount": "32",
                    "NetPrice": "55,18",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115893",
            "Model": "OWNA038E19423107",
            "Variant": "1001",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Bags..",
            "Code": "OWNA038E194231071001",
            "Color": "Nero",
            "Composition": "100% Calfskin",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA038E194231071001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA038E194231071001.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA038E194231071001_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA038E194231071001_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA038E194231071001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA038E194231071001_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211366606227", "Size": "L", "Qty": "0" },
                { "Barcode": "201372256723", "Size": "M", "Qty": "0" },
                { "Barcode": "200089866777", "Size": "S", "Qty": "0" },
                { "Barcode": "200152995682", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "265,00",
                    "BrandReferencePriceExVAT": "217,21",
                    "Discount": "55",
                    "NetPrice": "97,75",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115894",
            "Model": "OWNA039E19423107",
            "Variant": "1001",
            "Season": "AI19",
            "Brand": "Off White",
            "Category": "Bags..",
            "Code": "OWNA039E194231071001",
            "Color": "Nero",
            "Composition": "100% Calfskin",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA039E194231071001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA039E194231071001.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA039E194231071001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA039E194231071001_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Off white---OWNA039E194231071001_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Off white---OWNA039E194231071001_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210751224867", "Size": "L", "Qty": "0" },
                { "Barcode": "211588215793", "Size": "M", "Qty": "0" },
                { "Barcode": "211863595055", "Size": "S", "Qty": "0" },
                { "Barcode": "211756975707", "Size": "XL", "Qty": "0" },
                { "Barcode": "200290014458", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "498,00",
                    "BrandReferencePriceExVAT": "408,20",
                    "Discount": "55",
                    "NetPrice": "183,69",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115895",
            "Model": "A76338210",
            "Variant": "1555",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "Bags..",
            "Code": "A763382101555",
            "Color": "Nero",
            "Composition": "100% Polyurethane\n",
            "SizeAndFit": " Height: 32cm Width: 22cm Depth: 15cm",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A763382101555.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A763382101555.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A763382101555_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A763382101555_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A763382101555_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A763382101555_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211260975218", "Size": "L", "Qty": "0" },
                { "Barcode": "211978585273", "Size": "M", "Qty": "0" },
                { "Barcode": "211651344698", "Size": "S", "Qty": "0" },
                { "Barcode": "211954107473", "Size": "XL", "Qty": "0" },
                { "Barcode": "210170490178", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "478,00",
                    "BrandReferencePriceExVAT": "391,80",
                    "Discount": "55",
                    "NetPrice": "176,31",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115896",
            "Model": "A76338210",
            "Variant": "1219",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "Bags..",
            "Code": "A763382101219",
            "Color": "Rosa",
            "Composition": "100% Polyurethane",
            "SizeAndFit": " Height: 32cm Width: 22cm Depth: 15cm",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A763382101219.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A763382101219.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A763382101219_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A763382101219_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A763382101219_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A763382101219_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201239791259", "Size": "L", "Qty": "0" },
                { "Barcode": "211957401315", "Size": "M", "Qty": "0" },
                { "Barcode": "200275630581", "Size": "S", "Qty": "0" },
                { "Barcode": "201191434606", "Size": "XL", "Qty": "0" },
                { "Barcode": "210347770795", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "778,00",
                    "BrandReferencePriceExVAT": "637,70",
                    "Discount": "55",
                    "NetPrice": "286,97",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115897",
            "Model": "A84298210",
            "Variant": "1001",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "Bags..",
            "Code": "A842982101001",
            "Color": "Bianco",
            "Composition": "100% Polyurethane",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A842982101001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A842982101001.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A842982101001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A842982101001_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A842982101001_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A842982101001_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "201921304313", "Size": "L", "Qty": "0" },
                { "Barcode": "200137263380", "Size": "M", "Qty": "0" },
                { "Barcode": "200527632860", "Size": "S", "Qty": "0" },
                { "Barcode": "200918002340", "Size": "XL", "Qty": "0" },
                { "Barcode": "201524805206", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "228,00",
                    "BrandReferencePriceExVAT": "186,89",
                    "Discount": "55",
                    "NetPrice": "84,10",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115898",
            "Model": "A77128001",
            "Variant": "1555",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "Bags..",
            "Code": "A771280011555",
            "Color": "Nero",
            "Composition": "100% Calfskin  ",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A771280011555.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A771280011555.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A771280011555_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A771280011555_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A771280011555_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A771280011555_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210342839368", "Size": "M", "Qty": "0" },
                { "Barcode": "201778059474", "Size": "S", "Qty": "0" },
                { "Barcode": "201450818900", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "258,00",
                    "BrandReferencePriceExVAT": "211,48",
                    "Discount": "55",
                    "NetPrice": "95,16",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115899",
            "Model": "A77188210",
            "Variant": "1555",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "Bags..",
            "Code": "A771882101555",
            "Color": "Nero",
            "Composition": "100% Polyurethane",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A771882101555.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A771882101555.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A771882101555_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A771882101555_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A771882101555_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A771882101555_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211126587176", "Size": "L", "Qty": "0" },
                { "Barcode": "201841188380", "Size": "M", "Qty": "0" },
                { "Barcode": "210558798436", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "350,00",
                    "BrandReferencePriceExVAT": "286,89",
                    "Discount": "48",
                    "NetPrice": "149,18",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115900",
            "Model": "A77128001",
            "Variant": "1001",
            "Season": "AI19",
            "Brand": "Moschino",
            "Category": "Bags..",
            "Code": "A771280011001",
            "Color": "Bianco",
            "Composition": "100% Calfskin  ",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A771280011001.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A771280011001.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A771280011001_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A771280011001_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---MOSCHINO---A771280011001_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---MOSCHINO---A771280011001_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211276408490", "Size": "L", "Qty": "0" },
                { "Barcode": "210949167915", "Size": "M", "Qty": "0" },
                { "Barcode": "210168713690", "Size": "S", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2750,00",
                    "BrandReferencePriceExVAT": "2254,10",
                    "Discount": "48",
                    "NetPrice": "1172,13",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115901",
            "Model": "8011617",
            "Variant": "A1189",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Bags..",
            "Code": "8011617A1189",
            "Color": "Nero",
            "Composition": " 90% Nylon 10% Acrylic Details:100% Calf",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011617A1189.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011617A1189.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011617A1189_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011617A1189_1_D.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011617A1189_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011617A1189_2_D.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200068682820", "Size": "L", "Qty": "0" },
                { "Barcode": "200459052299", "Size": "M", "Qty": "0" },
                { "Barcode": "210131811727", "Size": "S", "Qty": "0" },
                { "Barcode": "200849421779", "Size": "XL", "Qty": "0" },
                { "Barcode": "211567031835", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "260,00",
                    "BrandReferencePriceExVAT": "213,11",
                    "Discount": "48",
                    "NetPrice": "110,82",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115902",
            "Model": "8011620",
            "Variant": "A2172",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Bags..",
            "Code": "8011620A2172",
            "Color": "Rosso",
            "Composition": " 90% Nylon 10% Acrylic Details:100% Calf",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011620A2172.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011620A2172.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011620A2172_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011620A2172_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011620A2172_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011620A2172_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210044761329", "Size": "40", "Qty": "1" },
                { "Barcode": "201717520753", "Size": "42", "Qty": "-1" },
                { "Barcode": "201152740861", "Size": "44", "Qty": "0" },
                { "Barcode": "200033347369", "Size": "46", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "260,00",
                    "BrandReferencePriceExVAT": "213,11",
                    "Discount": "48",
                    "NetPrice": "110,82",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115903",
            "Model": "8011618",
            "Variant": "A6817",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Bags..",
            "Code": "8011618A6817",
            "Color": "Rosa",
            "Composition": " 90% Nylon 10% Acrylic Details:100% Calf",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011618A6817.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011618A6817.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011618A6817_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011618A6817_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011618A6817_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011618A6817_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200156042834", "Size": "42", "Qty": "-1" },
                { "Barcode": "200546412314", "Size": "44", "Qty": "0" },
                { "Barcode": "210684325733", "Size": "46", "Qty": "1" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1800,00",
                    "BrandReferencePriceExVAT": "1475,41",
                    "Discount": "55",
                    "NetPrice": "663,93",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115904",
            "Model": "8011619",
            "Variant": "A2190",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Bags..",
            "Code": "8011619A2190",
            "Color": "Blu",
            "Composition": " 90% Nylon 10% Acrylic Details:100% Calf",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011619A2190.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011619A2190.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011619A2190_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011619A2190_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8011619A2190_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8011619A2190_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "211620663749", "Size": "44", "Qty": "1" },
                { "Barcode": "200606697512", "Size": "46", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1700,00",
                    "BrandReferencePriceExVAT": "1393,44",
                    "Discount": "55",
                    "NetPrice": "627,05",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115905",
            "Model": "8015146",
            "Variant": "A7026",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Bags..",
            "Code": "8015146A7026",
            "Color": "Beige",
            "Composition": " 100% Nylon Details:100% Calf",
            "SizeAndFit": " ",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8015146A7026.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8015146A7026.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8015146A7026_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8015146A7026_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8015146A7026_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8015146A7026_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "210662462438", "Size": "42", "Qty": "0" },
                { "Barcode": "201380072490", "Size": "44", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "2640,00",
                    "BrandReferencePriceExVAT": "2163,93",
                    "Discount": "55",
                    "NetPrice": "973,77",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115906",
            "Model": "8014808",
            "Variant": "A1212",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Bags..",
            "Code": "8014808A1212",
            "Color": "Avorio",
            "Composition": "95% cotton, 5% acrylic Detail:  100% calf",
            "SizeAndFit": " Height: 30cm Width: 35cm Depth: 16cm",
            "MadeIn": "Italy",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8014808A1212.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8014808A1212.jpg"
                },
                {
                    "No": "3",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8014808A1212_2_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8014808A1212_2_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8014808A1212_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8014808A1212_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200702326054", "Size": "L", "Qty": "0" },
                { "Barcode": "210728741840", "Size": "M", "Qty": "0" },
                { "Barcode": "200859835183", "Size": "S", "Qty": "0" },
                { "Barcode": "210013056765", "Size": "XL", "Qty": "1" },
                { "Barcode": "210027250232", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "470,00",
                    "BrandReferencePriceExVAT": "385,25",
                    "Discount": "48",
                    "NetPrice": "200,33",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        },
        {
            "ID": "1115907",
            "Model": "8008706",
            "Variant": "A1189",
            "Season": "AI19",
            "Brand": "Burberry",
            "Category": "Shirts",
            "Code": "8008706A1189",
            "Color": "Nero",
            "Composition": "97%cotton 3%elastane ",
            "SizeAndFit": " ",
            "MadeIn": "Thailand ",
            "Pictures": [
                {
                    "No": "1",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8008706A1189.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8008706A1189.jpg"
                },
                {
                    "No": "2",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8008706A1189_1_D.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8008706A1189_1_D.jpg"
                },
                {
                    "No": "4",
                    "PictureUrl": "https://www.atelieronweb.com/foto/AI19---BURBERRY---8008706A1189_3_P.jpg",
                    "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---BURBERRY---8008706A1189_3_P.jpg"
                }
            ],
            "Inventory": [
                { "Barcode": "200918645359", "Size": "L", "Qty": "0" },
                { "Barcode": "211245885936", "Size": "M", "Qty": "0" },
                { "Barcode": "201484597271", "Size": "S", "Qty": "0" },
                { "Barcode": "200528275879", "Size": "XS", "Qty": "0" }
            ],
            "Prices": [
                {
                    "Retailer": "AtelierOnWeb",
                    "BrandReferencePrice": "1080,00",
                    "BrandReferencePriceExVAT": "885,25",
                    "Discount": "55",
                    "NetPrice": "398,36",
                    "Currency": "EUR",
                    "PercentTax": "22",
                    "Country": "IT"
                }
            ],
            "Supplier": "Atelier"
        }
    ]
};

export const productReducer = (state = initialState , action) => {
    switch (action.type) {
        case GET_PRODUCT: {
            return state;
        }
        default: return state;
    }
};
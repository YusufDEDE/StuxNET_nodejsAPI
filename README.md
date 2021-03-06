# StuxNET_nodejsAPI

Node.js api ye react-native tarafından bağlanmak için kendi local adresin(192.168.*.*) ile bağlan kanka.

http://localhost:3000/register -> POST
============================== 
REQ
```json
{
    "tc": 11111111114,
    "pw": "stuxnet1223",
    "firstName": "JOHN",
    "lastName": "WICK",
    "birthDate": "1990-03-05",
    "address": "NewYork City",
    "phone": "1 254 000 3",
    "mail": "johnwick@continental.uk"
}
```

http://localhost:3000/login -> POST
================================
REQ
```json
{
	"tc":11111111111,
	"pw":"123"
}
```

RES
```json
{
    "status": 200,
    "message": "Access Granted!"
}
```

http://localhost:3000/api/customer/updateUser -> POST
=========================================
RES
```json
{
    "tc": 11111111114,
    "pw": "stuxnet1223",
    "firstName": "JOHN",
    "lastName": "WICK",
    "birthDate": "1990-03-05",
    "address": "NewYork City",
    "phone": "1 254 000 3",
    "mail": "johnwick@continental.uk"
}
```
http://localhost:3000/api/customer/updateUserList -> POST
=============================================
REQ
```json
{
	"tc": 25068115299
}
```

RES
```json
{
    "customerID": 10000000,
    "tcNumber": "11111111111",
    "firstName": "OKAN",
    "lastName": "BATUK",
    "birthDate": "1998-02-01T00:00:00.000Z",
    "address": null,
    "phoneNumber": null,
    "mail": "okan@gmail.com",
    "registerDate": "2019-10-03T12:54:58.047Z",
    "state": true,
    "password": "123"
}
```

http://localhost:3000/api/account/ -> POST
==============================
REQ
```json
{
	"tc": 25068115299
}
```

RES
```json
[
    {
        "Account Number": "10000000 — 1001",
        "Balance": "0.00 TL",
        "Creation Date": "13.10.2019"
    },
    {
        "Account Number": "10000000 — 1002",
        "Balance": "0.00 TL",
        "Creation Date": "13.10.2019"
    },
    {
        "Account Number": "10000000 — 1003",
        "Balance": "0.00 TL",
        "Creation Date": "15.10.2019"
    },
    {
        "Account Number": "10000000 — 1004",
        "Balance": "0.00 TL",
        "Creation Date": "15.10.2019"
    },
    {
        "Account Number": "10000000 — 1005",
        "Balance": "0.00 TL",
        "Creation Date": "15.10.2019"
    },
    {
        "Account Number": "10000000 — 1006",
        "Balance": "0.00 TL",
        "Creation Date": "15.10.2019"
    }
]
```

http://localhost:3000/api/account/newAccount -> POST
===========================================
REQ
```json
{
	"tc": 25068115299
}
```

RES
```json
{
    "status": 200,
    "message": "success"
}
```

http://localhost:3000/api/account/deleteAccount -> POST
===========================================
REQ
```json
{
	"tc": 25068115299,
	"additNo":1003
}
```

RES
```json
{
    "status": 200,
    "message": "success"
}
```

http://localhost:3000/api/account/deposit -> POST
=====================================
REQ
```json
{
	"tc": 25068115299,
	"additNo":1005,
	"deposit": 365
}
```

RES
```json
{
    "status": 200,
    "message": "success"
}
```

http://localhost:3000/api/account/withdraw -> POST
======================================
REQ
```json
{
	"tc": 25068115299,
	"additNo":"1005",
	"withdrawal":"36.3"
}
```

RES
```json
{
    "status": 200,
    "message": "success"
}
```

http://localhost:3000/api/account/virman -> POST
=====================================
REQ
```json
{
	"tc": 25068115299,
	"sendAddit": 1005,
	"recAddit":1004,
	"money":3.65
}
```

RES
```json
{
    "status": 200,
    "message": "success"
}	
```


http://localhost:3000/api/account/eft -> POST
=================================
REQ
```json
{
	"tc": 25068115299,
	"sendAddit": 1005,
	"recAcc":10000000,
	"recAddit":1001,
	"money":10.25
}
```

RES
```json
{
    "status": 200,
    "message": "success"
}
```

http://localhost:3000/api/account/accTransactions -> POST
==============================
REQ
```json
{
	"tc": 11111111111
}
```

RES
```json
[
    {
        "ACCOUNT": "10000000 — 1002",
        "DATE": "13.10.2019",
        "TIME": "17:53",
        "PLATFORM": "MOBIL"
    },
    {
        "ACCOUNT": "10000000 — 1002",
        "DATE": "13.10.2019",
        "TIME": "17:56",
        "PLATFORM": "MOBIL"
    },
    {
        "ACCOUNT": "10000000 — 1002",
        "DATE": "26.10.2019",
        "TIME": "19:31",
        "PLATFORM": "MOBIL"
    },
    {
        "ACCOUNT": "10000000 — 1003",
        "DATE": "27.10.2019",
        "TIME": "12:15",
        "PLATFORM": "MOBIL"
    },
    {
        "ACCOUNT": "10000000 — 1004",
        "DATE": "27.10.2019",
        "TIME": "12:33",
        "PLATFORM": "MOBIL"
    },
    {
        "ACCOUNT": "10000000 — 1005",
        "DATE": "27.10.2019",
        "TIME": "12:55",
        "PLATFORM": "MOBIL"
    },
    {
        "ACCOUNT": "10000000 — 1006",
        "DATE": "27.10.2019",
        "TIME": "12:49",
        "PLATFORM": "MOBIL"
    },
    {
        "ACCOUNT": "10000000 — 1006",
        "DATE": "27.10.2019",
        "TIME": "12:55",
        "PLATFORM": "MOBIL"
    },
    {
        "ACCOUNT": "10000000 — 1010",
        "DATE": "27.10.2019",
        "TIME": "14:50",
        "PLATFORM": "MOBIL"
    }
]
```

http://localhost:3000/api/payment -> POST
============================== 

REQ
```json
{
	"accNo": 10000000,
	"additNo": 1001,
	"billID": 27,
	"pay":15.7
}
```

RES
```json
[
    {
        "Status": 1
    }
]
```
http://localhost:3000/api/account/listofmoneytransfers -> POST
===================================
REQ
```json
{
	"tc":11111111111
}
```

RES
```json
[
     [
            {
                "activityID": 1,
                "tcNumber": "11111111111",
                "SENDER": "10000000 — 1001",
                "RECIPIENT": "10000000 — 1002",
                "PAY": "50.00 TRY",
                "ACTIVITY": "VIRMAN"
            },
            {
                "activityID": 2,
                "tcNumber": "11111111111",
                "SENDER": "10000000 — 1001",
                "RECIPIENT": "10000002 — 1002",
                "PAY": "50.00 TRY",
                "ACTIVITY": "HAVALE"
            },
            {
                "activityID": 4,
                "tcNumber": "11111111111",
                "SENDER": "10000000 — 1002",
                "RECIPIENT": "10000000 — 1003",
                "PAY": "50.00 TRY",
                "ACTIVITY": "VIRMAN"
            },
            {
                "activityID": 6,
                "tcNumber": "11111111111",
                "SENDER": "10000000 — 1003",
                "RECIPIENT": "10000002 — 1002",
                "PAY": "100.00 TRY",
                "ACTIVITY": "HAVALE"
            }
        ],
        [
            {
                "Status": 1
            }
        ]
]
```
http://localhost:3000/api/account/popupmoneytransfer -> POST
===============================
REQ
```json
{
	"actID":1
}
```

RES
```json
[
    {
        "activityID": 1,
        "SENDER": "10000000 — 1001",
        "RECIPIENT": "10000000 — 1002",
        "PAY": "50.00 TRY",
        "DATE": "20.10.2019",
        "TIME": "02:36",
        "ACTIVITY": "VIRMAN",
        "PLATFORM": "MOBIL"
    }
]
```

http://localhost:3000/api/payment/listofpaymenttransactions -> POST
====================================

REQ
```json
{
	"tc": 11111111111
}
```

RES
```json
[
    {
        "transID": 1,
        "accNo": "10000000",
        "additionalNo": 1001,
        "AccountNumber": "10000000 — 1001",
        "BillNumber": 1,
        "Payment": "55.60 TRY"
    },
    {
        "transID": 4,
        "accNo": "10000000",
        "additionalNo": 1001,
        "AccountNumber": "10000000 — 1001",
        "BillNumber": 3,
        "Payment": "25.60 TRY"
    },
    {
        "transID": 5,
        "accNo": "10000000",
        "additionalNo": 1001,
        "AccountNumber": "10000000 — 1001",
        "BillNumber": 23,
        "Payment": "42.40 TRY"
    },
    {
        "transID": 11,
        "accNo": "10000000",
        "additionalNo": 1001,
        "AccountNumber": "10000000 — 1001",
        "BillNumber": 27,
        "Payment": "15.70 TRY"
    },
    {
        "transID": 12,
        "accNo": "10000000",
        "additionalNo": 1001,
        "AccountNumber": "10000000 — 1001",
        "BillNumber": 29,
        "Payment": "15.30 TRY"
    }
]
```

http://localhost:3000/api/payment/popuppaymenttransaction -> POST
========================================

REQ
```json
{
	"transID":1
}
```

RES
```json
{
    "transID": 1,
    "SENDER": "10000000 — 1001",
    "PAY": "55.60 TRY",
    "DATE": "02.11.2019",
    "TIME": "19:45",
    "PLATFORM": "MOBIL"
}
```

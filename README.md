# StuxNET_nodejsAPI

Node.js api ye react-native tarafından bağlanmak için kendi local adresin(192.168.*.*) ile bağlan kanka.

http://localhost:3000/register -> POST
============================== 
{
	"tcNumber": 25068145299,
	"pass": "stuxnet123",
	"firstName": "John",
	"lastName" : "Wick",
	"birthdate": 19640903,
	"address":"NewYork City",
	"phone":"1 254 000 3215",
	"mail": "johnwick@continental.uk"
}

http://localhost:3000/login -> POST
================================
REQ
{
	"tc":11111111111,
	"pw":"123"
}

RES
{
    "status": 200,
    "message": "Access Granted!"
}

http://localhost:3000/customer/updateUser -> POST
=========================================

{
	"tc": 25068115299,
	"firstName": "John",
	"lastName" : "Wick",
	"birthdate": 19640903,
	"address":"NewYork City - GALAXY",
	"phone":"1 254 000 3215",
	"mail": "johnwiick@continental.uk"
}

http://localhost:3000/customer/updateUserList -> POST
=============================================
{
	"tc": 25068115299
}

http://localhost:3000/account/ -> POST
==============================
REQ
{
	"tc": 25068115299
}

RES
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

http://localhost:3000/account/newAccount -> POST
===========================================
REQ
{
	"tc": 25068115299
}

RES
{
    "status": 200,
    "message": "success"
}

http://localhost:3000/account/deleteAccount -> POST
===========================================
REQ
{
	"tc": 25068115299,
	"additNo":1003
}

RES
{
    "status": 200,
    "message": "success"
}

http://localhost:3000/account/deposit -> POST
=====================================
REQ
{
	"tc": 25068115299,
	"additNo":1005,
	"deposit": 365
}

RES
{
    "status": 200,
    "message": "success"
}

http://localhost:3000/account/withdraw -> POST
======================================
REQ
{
	"tc": 25068115299,
	"additNo":"1005",
	"deposit":"36.3"
}

RES
{
    "status": 200,
    "message": "success"
}

http://localhost:3000/account/virman -> POST
=====================================
REQ
{
	"tc": 25068115299,
	"sendAddit": 1005,
	"recAddit":1004,
	"money":3.65
}

RES
{
    "status": 200,
    "message": "success"
}	

http://localhost:3000/account/eft -> POST
=================================
REQ
{
	"tc": 25068115299,
	"sendAddit": 1005,
	"recAcc":10000000,
	"recAddit":1001,
	"money":10.25
}

RES
{
    "status": 200,
    "message": "success"
}

import {EventResult} from '../types/events';

const event1 = {
  "rules": {
    "eventName": "KAS's alpha test event",
    "dateStart": "2025-05-29",
    "dateEnd": "2025-05-30",
    "pokemonIds": [
      4,
      15,
      25,
      66,
      86,
      99,
      36,
      39,
      107
    ]
  },
  "users": [
    {
      "name": "Kas (05/29 only)",
      "caughtNum": 7,
      "pokemons": [
        {
          "id": 4,
          "name": "charmander",
          "caught": false
        },
        {
          "id": 15,
          "name": "beedrill",
          "caught": true,
          "caughtAt": "2025-05-29 12:22:48"
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": true,
          "caughtAt": "2025-05-29 08:11:58"
        },
        {
          "id": 66,
          "name": "machop",
          "caught": true,
          "caughtAt": "2025-05-29 08:44:39"
        },
        {
          "id": 86,
          "name": "seel",
          "caught": true,
          "caughtAt": "2025-05-29 09:58:21"
        },
        {
          "id": 99,
          "name": "kingler",
          "caught": true,
          "caughtAt": "2025-05-29 12:39:17"
        },
        {
          "id": 36,
          "name": "clefable",
          "caught": false
        },
        {
          "id": 39,
          "name": "jigglypuff",
          "caught": true,
          "caughtAt": "2025-05-29 07:48:37"
        },
        {
          "id": 107,
          "name": "hitmonchan",
          "caught": true,
          "caughtAt": "2025-05-29 08:41:33"
        }
      ],
      "timeSpent": 17440000
    },
    {
      "name": "h0tp (one day)",
      "caughtNum": 3,
      "pokemons": [
        {
          "id": 4,
          "name": "charmander",
          "caught": false
        },
        {
          "id": 15,
          "name": "beedrill",
          "caught": false
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": false
        },
        {
          "id": 66,
          "name": "machop",
          "caught": true,
          "caughtAt": "2025-05-30 10:57:24"
        },
        {
          "id": 86,
          "name": "seel",
          "caught": false
        },
        {
          "id": 99,
          "name": "kingler",
          "caught": true,
          "caughtAt": "2025-05-30 10:43:48"
        },
        {
          "id": 36,
          "name": "clefable",
          "caught": false
        },
        {
          "id": 39,
          "name": "jigglypuff",
          "caught": false
        },
        {
          "id": 107,
          "name": "hitmonchan",
          "caught": true,
          "caughtAt": "2025-05-29 10:21:18"
        }
      ],
      "timeSpent": 88566000
    }
  ]
}

const event2 = {
  "rules": {
    "eventName": "Doc's first event #1",
    "dateStart": "2025-06-07",
    "dateEnd": "2025-06-11",
    "pokemonIds": [
      37,
      46,
      147,
      181,
      115,
      221,
      176,
      62,
      89,
      198,
      54,
      25,
      41,
      95,
      44,
      144
    ]
  },
  "users": [
    {
      "name": "everjade",
      "caughtNum": 16,
      "pokemons": [
        {
          "id": 37,
          "name": "vulpix",
          "caught": true,
          "caughtAt": "2025-06-07 02:20:45"
        },
        {
          "id": 46,
          "name": "paras",
          "caught": true,
          "caughtAt": "2025-06-07 02:50:37"
        },
        {
          "id": 147,
          "name": "dratini",
          "caught": true,
          "caughtAt": "2025-06-07 02:55:16"
        },
        {
          "id": 181,
          "name": "ampharos",
          "caught": true,
          "caughtAt": "2025-06-07 00:34:28"
        },
        {
          "id": 115,
          "name": "kangaskhan",
          "caught": true,
          "caughtAt": "2025-06-07 09:59:21"
        },
        {
          "id": 221,
          "name": "piloswine",
          "caught": true,
          "caughtAt": "2025-06-07 00:25:56"
        },
        {
          "id": 176,
          "name": "togetic",
          "caught": true,
          "caughtAt": "2025-06-11 03:33:47"
        },
        {
          "id": 62,
          "name": "poliwrath",
          "caught": true,
          "caughtAt": "2025-06-11 01:52:18"
        },
        {
          "id": 89,
          "name": "muk",
          "caught": true,
          "caughtAt": "2025-06-10 02:38:34"
        },
        {
          "id": 198,
          "name": "murkrow",
          "caught": true,
          "caughtAt": "2025-06-07 01:18:17"
        },
        {
          "id": 54,
          "name": "psyduck",
          "caught": true,
          "caughtAt": "2025-06-09 18:25:56"
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": true,
          "caughtAt": "2025-06-07 04:02:43"
        },
        {
          "id": 41,
          "name": "zubat",
          "caught": true,
          "caughtAt": "2025-06-07 02:10:06"
        },
        {
          "id": 95,
          "name": "onix",
          "caught": true,
          "caughtAt": "2025-06-07 02:39:58"
        },
        {
          "id": 44,
          "name": "gloom",
          "caught": true,
          "caughtAt": "2025-06-07 02:24:39"
        },
        {
          "id": 144,
          "name": "articuno",
          "caught": true,
          "caughtAt": "2025-06-10 21:51:51"
        }
      ],
      "timeSpent": 356871000
    },
    {
      "name": "kas",
      "caughtNum": 15,
      "pokemons": [
        {
          "id": 37,
          "name": "vulpix",
          "caught": true,
          "caughtAt": "2025-06-07 09:49:09"
        },
        {
          "id": 46,
          "name": "paras",
          "caught": true,
          "caughtAt": "2025-06-07 13:18:13"
        },
        {
          "id": 147,
          "name": "dratini",
          "caught": true,
          "caughtAt": "2025-06-07 18:51:37"
        },
        {
          "id": 181,
          "name": "ampharos",
          "caught": true,
          "caughtAt": "2025-06-08 08:14:50"
        },
        {
          "id": 115,
          "name": "kangaskhan",
          "caught": true,
          "caughtAt": "2025-06-09 21:29:12"
        },
        {
          "id": 221,
          "name": "piloswine",
          "caught": true,
          "caughtAt": "2025-06-08 08:22:30"
        },
        {
          "id": 176,
          "name": "togetic",
          "caught": true,
          "caughtAt": "2025-06-08 09:56:48"
        },
        {
          "id": 62,
          "name": "poliwrath",
          "caught": true,
          "caughtAt": "2025-06-07 09:59:24"
        },
        {
          "id": 89,
          "name": "muk",
          "caught": true,
          "caughtAt": "2025-06-07 06:57:27"
        },
        {
          "id": 198,
          "name": "murkrow",
          "caught": true,
          "caughtAt": "2025-06-08 08:26:50"
        },
        {
          "id": 54,
          "name": "psyduck",
          "caught": true,
          "caughtAt": "2025-06-07 18:55:23"
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": true,
          "caughtAt": "2025-06-07 06:47:19"
        },
        {
          "id": 41,
          "name": "zubat",
          "caught": true,
          "caughtAt": "2025-06-07 07:24:10"
        },
        {
          "id": 95,
          "name": "onix",
          "caught": true,
          "caughtAt": "2025-06-07 07:26:19"
        },
        {
          "id": 44,
          "name": "gloom",
          "caught": true,
          "caughtAt": "2025-06-07 06:58:29"
        },
        {
          "id": 144,
          "name": "articuno",
          "caught": false
        }
      ],
      "timeSpent": 225713000
    },
    {
      "name": "sefcio",
      "caughtNum": 15,
      "pokemons": [
        {
          "id": 37,
          "name": "vulpix",
          "caught": true,
          "caughtAt": "2025-06-07 12:25:53"
        },
        {
          "id": 46,
          "name": "paras",
          "caught": true,
          "caughtAt": "2025-06-07 23:34:14"
        },
        {
          "id": 147,
          "name": "dratini",
          "caught": true,
          "caughtAt": "2025-06-10 14:28:21"
        },
        {
          "id": 181,
          "name": "ampharos",
          "caught": true,
          "caughtAt": "2025-06-07 15:24:09"
        },
        {
          "id": 115,
          "name": "kangaskhan",
          "caught": true,
          "caughtAt": "2025-06-07 12:28:36"
        },
        {
          "id": 221,
          "name": "piloswine",
          "caught": true,
          "caughtAt": "2025-06-07 15:26:18"
        },
        {
          "id": 176,
          "name": "togetic",
          "caught": true,
          "caughtAt": "2025-06-07 12:38:19"
        },
        {
          "id": 62,
          "name": "poliwrath",
          "caught": true,
          "caughtAt": "2025-06-08 22:38:37"
        },
        {
          "id": 89,
          "name": "muk",
          "caught": true,
          "caughtAt": "2025-06-08 22:40:30"
        },
        {
          "id": 198,
          "name": "murkrow",
          "caught": true,
          "caughtAt": "2025-06-08 20:25:13"
        },
        {
          "id": 54,
          "name": "psyduck",
          "caught": true,
          "caughtAt": "2025-06-07 12:38:59"
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": true,
          "caughtAt": "2025-06-08 20:24:23"
        },
        {
          "id": 41,
          "name": "zubat",
          "caught": true,
          "caughtAt": "2025-06-08 20:30:37"
        },
        {
          "id": 95,
          "name": "onix",
          "caught": true,
          "caughtAt": "2025-06-07 23:32:41"
        },
        {
          "id": 44,
          "name": "gloom",
          "caught": true,
          "caughtAt": "2025-06-07 23:36:31"
        },
        {
          "id": 144,
          "name": "articuno",
          "caught": false
        }
      ],
      "timeSpent": 266548000
    },
    {
      "name": "morganite",
      "caughtNum": 15,
      "pokemons": [
        {
          "id": 37,
          "name": "vulpix",
          "caught": true,
          "caughtAt": "2025-06-07 12:25:53"
        },
        {
          "id": 46,
          "name": "paras",
          "caught": true,
          "caughtAt": "2025-06-07 23:34:14"
        },
        {
          "id": 147,
          "name": "dratini",
          "caught": true,
          "caughtAt": "2025-06-10 14:28:21"
        },
        {
          "id": 181,
          "name": "ampharos",
          "caught": true,
          "caughtAt": "2025-06-07 15:24:09"
        },
        {
          "id": 115,
          "name": "kangaskhan",
          "caught": true,
          "caughtAt": "2025-06-07 12:28:36"
        },
        {
          "id": 221,
          "name": "piloswine",
          "caught": true,
          "caughtAt": "2025-06-07 15:26:18"
        },
        {
          "id": 176,
          "name": "togetic",
          "caught": true,
          "caughtAt": "2025-06-07 12:38:19"
        },
        {
          "id": 62,
          "name": "poliwrath",
          "caught": true,
          "caughtAt": "2025-06-08 22:38:37"
        },
        {
          "id": 89,
          "name": "muk",
          "caught": true,
          "caughtAt": "2025-06-08 22:40:30"
        },
        {
          "id": 198,
          "name": "murkrow",
          "caught": true,
          "caughtAt": "2025-06-08 20:25:13"
        },
        {
          "id": 54,
          "name": "psyduck",
          "caught": true,
          "caughtAt": "2025-06-07 12:38:59"
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": true,
          "caughtAt": "2025-06-08 20:24:23"
        },
        {
          "id": 41,
          "name": "zubat",
          "caught": true,
          "caughtAt": "2025-06-08 20:30:37"
        },
        {
          "id": 95,
          "name": "onix",
          "caught": true,
          "caughtAt": "2025-06-07 23:32:41"
        },
        {
          "id": 44,
          "name": "gloom",
          "caught": true,
          "caughtAt": "2025-06-07 23:36:31"
        },
        {
          "id": 144,
          "name": "articuno",
          "caught": false
        }
      ],
      "timeSpent": 266548000
    },
    {
      "name": "peace",
      "caughtNum": 13,
      "pokemons": [
        {
          "id": 37,
          "name": "vulpix",
          "caught": true,
          "caughtAt": "2025-06-07 22:40:45"
        },
        {
          "id": 46,
          "name": "paras",
          "caught": true,
          "caughtAt": "2025-06-10 20:28:29"
        },
        {
          "id": 147,
          "name": "dratini",
          "caught": true,
          "caughtAt": "2025-06-08 08:20:42"
        },
        {
          "id": 181,
          "name": "ampharos",
          "caught": true,
          "caughtAt": "2025-06-09 03:41:19"
        },
        {
          "id": 115,
          "name": "kangaskhan",
          "caught": false
        },
        {
          "id": 221,
          "name": "piloswine",
          "caught": true,
          "caughtAt": "2025-06-09 00:30:36"
        },
        {
          "id": 176,
          "name": "togetic",
          "caught": false
        },
        {
          "id": 62,
          "name": "poliwrath",
          "caught": true,
          "caughtAt": "2025-06-08 08:38:46"
        },
        {
          "id": 89,
          "name": "muk",
          "caught": true,
          "caughtAt": "2025-06-08 08:19:10"
        },
        {
          "id": 198,
          "name": "murkrow",
          "caught": true,
          "caughtAt": "2025-06-09 03:14:50"
        },
        {
          "id": 54,
          "name": "psyduck",
          "caught": true,
          "caughtAt": "2025-06-07 19:47:19"
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": true,
          "caughtAt": "2025-06-07 22:47:12"
        },
        {
          "id": 41,
          "name": "zubat",
          "caught": true,
          "caughtAt": "2025-06-07 19:48:37"
        },
        {
          "id": 95,
          "name": "onix",
          "caught": true,
          "caughtAt": "2025-06-10 08:00:15"
        },
        {
          "id": 44,
          "name": "gloom",
          "caught": true,
          "caughtAt": "2025-06-07 12:05:00"
        },
        {
          "id": 144,
          "name": "articuno",
          "caught": false
        }
      ],
      "timeSpent": 289409000
    },
    {
      "name": "bidoof",
      "caughtNum": 13,
      "pokemons": [
        {
          "id": 37,
          "name": "vulpix",
          "caught": true,
          "caughtAt": "2025-06-07 22:40:45"
        },
        {
          "id": 46,
          "name": "paras",
          "caught": true,
          "caughtAt": "2025-06-10 20:28:29"
        },
        {
          "id": 147,
          "name": "dratini",
          "caught": true,
          "caughtAt": "2025-06-08 08:20:42"
        },
        {
          "id": 181,
          "name": "ampharos",
          "caught": true,
          "caughtAt": "2025-06-09 03:41:19"
        },
        {
          "id": 115,
          "name": "kangaskhan",
          "caught": false
        },
        {
          "id": 221,
          "name": "piloswine",
          "caught": true,
          "caughtAt": "2025-06-09 00:30:36"
        },
        {
          "id": 176,
          "name": "togetic",
          "caught": false
        },
        {
          "id": 62,
          "name": "poliwrath",
          "caught": true,
          "caughtAt": "2025-06-08 08:38:46"
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": true,
          "caughtAt": "2025-06-08 08:38:46"
        },
        {
          "id": 89,
          "name": "muk",
          "caught": true,
          "caughtAt": "2025-06-08 08:19:10"
        },
        {
          "id": 198,
          "name": "murkrow",
          "caught": true,
          "caughtAt": "2025-06-09 03:14:50"
        },
        {
          "id": 54,
          "name": "psyduck",
          "caught": true,
          "caughtAt": "2025-06-07 19:47:19"
        },
        {
          "id": 41,
          "name": "zubat",
          "caught": true,
          "caughtAt": "2025-06-07 19:48:37"
        },
        {
          "id": 95,
          "name": "onix",
          "caught": true,
          "caughtAt": "2025-06-10 08:00:15"
        },
        {
          "id": 44,
          "name": "gloom",
          "caught": true,
          "caughtAt": "2025-06-07 12:05:00"
        },
        {
          "id": 144,
          "name": "articuno",
          "caught": false
        }
      ],
      "timeSpent": 289409000
    },
    {
      "name": "vi",
      "caughtNum": 11,
      "pokemons": [
        {
          "id": 37,
          "name": "vulpix",
          "caught": true,
          "caughtAt": "2025-06-10 15:45:46"
        },
        {
          "id": 46,
          "name": "paras",
          "caught": true,
          "caughtAt": "2025-06-10 17:48:40"
        },
        {
          "id": 147,
          "name": "dratini",
          "caught": false
        },
        {
          "id": 181,
          "name": "ampharos",
          "caught": false
        },
        {
          "id": 115,
          "name": "kangaskhan",
          "caught": true,
          "caughtAt": "2025-06-10 18:11:58"
        },
        {
          "id": 221,
          "name": "piloswine",
          "caught": true,
          "caughtAt": "2025-06-07 15:01:20"
        },
        {
          "id": 176,
          "name": "togetic",
          "caught": true,
          "caughtAt": "2025-06-10 21:14:18"
        },
        {
          "id": 62,
          "name": "poliwrath",
          "caught": true,
          "caughtAt": "2025-06-11 00:11:57"
        },
        {
          "id": 89,
          "name": "muk",
          "caught": true,
          "caughtAt": "2025-06-07 15:16:55"
        },
        {
          "id": 198,
          "name": "murkrow",
          "caught": true,
          "caughtAt": "2025-06-09 14:07:54"
        },
        {
          "id": 54,
          "name": "psyduck",
          "caught": false
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": true,
          "caughtAt": "2025-06-10 20:58:07"
        },
        {
          "id": 41,
          "name": "zubat",
          "caught": true,
          "caughtAt": "2025-06-07 15:12:58"
        },
        {
          "id": 95,
          "name": "onix",
          "caught": true,
          "caughtAt": "2025-06-07 14:40:47"
        },
        {
          "id": 44,
          "name": "gloom",
          "caught": false
        },
        {
          "id": 144,
          "name": "articuno",
          "caught": false
        }
      ],
      "timeSpent": 293470000
    },
    {
      "name": "heldazar",
      "caughtNum": 10,
      "pokemons": [
        {
          "id": 37,
          "name": "vulpix",
          "caught": true,
          "caughtAt": "2025-06-08 18:02:35"
        },
        {
          "id": 46,
          "name": "paras",
          "caught": true,
          "caughtAt": "2025-06-09 00:01:49"
        },
        {
          "id": 147,
          "name": "dratini",
          "caught": false
        },
        {
          "id": 181,
          "name": "ampharos",
          "caught": true,
          "caughtAt": "2025-06-09 00:02:18"
        },
        {
          "id": 115,
          "name": "kangaskhan",
          "caught": false
        },
        {
          "id": 221,
          "name": "piloswine",
          "caught": true,
          "caughtAt": "2025-06-08 23:32:07"
        },
        {
          "id": 176,
          "name": "togetic",
          "caught": false
        },
        {
          "id": 62,
          "name": "poliwrath",
          "caught": true,
          "caughtAt": "2025-06-08 18:24:53"
        },
        {
          "id": 89,
          "name": "muk",
          "caught": false
        },
        {
          "id": 198,
          "name": "murkrow",
          "caught": true,
          "caughtAt": "2025-06-08 17:55:11"
        },
        {
          "id": 54,
          "name": "psyduck",
          "caught": true,
          "caughtAt": "2025-06-08 18:04:06"
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": true,
          "caughtAt": "2025-06-08 23:30:21"
        },
        {
          "id": 41,
          "name": "zubat",
          "caught": true,
          "caughtAt": "2025-06-08 17:58:17"
        },
        {
          "id": 95,
          "name": "onix",
          "caught": false
        },
        {
          "id": 44,
          "name": "gloom",
          "caught": true,
          "caughtAt": "2025-06-08 13:03:52"
        },
        {
          "id": 144,
          "name": "articuno",
          "caught": false
        }
      ],
      "timeSpent": 39506000
    },
    {
      "name": "johanna",
      "caughtNum": 7,
      "pokemons": [
        {
          "id": 37,
          "name": "vulpix",
          "caught": true,
          "caughtAt": "2025-06-07 12:26:28"
        },
        {
          "id": 46,
          "name": "paras",
          "caught": true,
          "caughtAt": "2025-06-07 11:36:41"
        },
        {
          "id": 147,
          "name": "dratini",
          "caught": false
        },
        {
          "id": 181,
          "name": "ampharos",
          "caught": false
        },
        {
          "id": 115,
          "name": "kangaskhan",
          "caught": true,
          "caughtAt": "2025-06-07 11:11:29"
        },
        {
          "id": 221,
          "name": "piloswine",
          "caught": false
        },
        {
          "id": 176,
          "name": "togetic",
          "caught": false
        },
        {
          "id": 62,
          "name": "poliwrath",
          "caught": false
        },
        {
          "id": 89,
          "name": "muk",
          "caught": false
        },
        {
          "id": 198,
          "name": "murkrow",
          "caught": true,
          "caughtAt": "2025-06-08 13:10:20"
        },
        {
          "id": 54,
          "name": "psyduck",
          "caught": false
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": false
        },
        {
          "id": 41,
          "name": "zubat",
          "caught": true,
          "caughtAt": "2025-06-07 10:38:38"
        },
        {
          "id": 95,
          "name": "onix",
          "caught": true,
          "caughtAt": "2025-06-07 11:32:42"
        },
        {
          "id": 44,
          "name": "gloom",
          "caught": true,
          "caughtAt": "2025-06-08 19:24:04"
        },
        {
          "id": 144,
          "name": "articuno",
          "caught": false
        }
      ],
      "timeSpent": 117926000
    },
    {
      "name": "stone",
      "caughtNum": 0,
      "pokemons": [
        {
          "id": 37,
          "name": "vulpix",
          "caught": false
        },
        {
          "id": 46,
          "name": "paras",
          "caught": false
        },
        {
          "id": 147,
          "name": "dratini",
          "caught": false
        },
        {
          "id": 181,
          "name": "ampharos",
          "caught": false
        },
        {
          "id": 115,
          "name": "kangaskhan",
          "caught": false
        },
        {
          "id": 221,
          "name": "piloswine",
          "caught": false
        },
        {
          "id": 176,
          "name": "togetic",
          "caught": false
        },
        {
          "id": 62,
          "name": "poliwrath",
          "caught": false
        },
        {
          "id": 89,
          "name": "muk",
          "caught": false
        },
        {
          "id": 198,
          "name": "murkrow",
          "caught": false
        },
        {
          "id": 54,
          "name": "psyduck",
          "caught": false
        },
        {
          "id": 25,
          "name": "pikachu",
          "caught": false
        },
        {
          "id": 41,
          "name": "zubat",
          "caught": false
        },
        {
          "id": 95,
          "name": "onix",
          "caught": false
        },
        {
          "id": 44,
          "name": "gloom",
          "caught": false
        },
        {
          "id": 144,
          "name": "articuno",
          "caught": false
        }
      ],
      "timeSpent": 0
    }
  ]
}

const event3cats = {
  "rules": {
    "eventName": "June's evee/cats grab event #2",
    "dateStart": "2025-06-16",
    "dateEnd": "2025-06-30",
    "pokemonIds": [
      52,
      53,
      133,
      134,
      135,
      136,
      196,
      197,
      215,
      431,
      432,
      461,
      470,
      471,
      677,
      678,
      700
    ]
  },
  "users": [
    {
      "name": "everjade",
      "caughtNum": 17,
      "pokemons": [
        {
          "id": 52,
          "name": "meowth",
          "caught": true,
          "caughtAt": "2025-06-16 17:26:08"
        },
        {
          "id": 53,
          "name": "persian",
          "caught": true,
          "caughtAt": "2025-06-16 17:12:43"
        },
        {
          "id": 133,
          "name": "eevee",
          "caught": true,
          "caughtAt": "2025-06-16 17:20:52"
        },
        {
          "id": 134,
          "name": "vaporeon",
          "caught": true,
          "caughtAt": "2025-06-17 15:25:33"
        },
        {
          "id": 135,
          "name": "jolteon",
          "caught": true,
          "caughtAt": "2025-06-17 14:48:30"
        },
        {
          "id": 136,
          "name": "flareon",
          "caught": true,
          "caughtAt": "2025-06-16 17:13:13"
        },
        {
          "id": 196,
          "name": "espeon",
          "caught": true,
          "caughtAt": "2025-06-17 15:46:06"
        },
        {
          "id": 197,
          "name": "umbreon",
          "caught": true,
          "caughtAt": "2025-06-16 00:52:34"
        },
        {
          "id": 215,
          "name": "sneasel",
          "caught": true,
          "caughtAt": "2025-06-17 16:49:59"
        },
        {
          "id": 431,
          "name": "glameow",
          "caught": true,
          "caughtAt": "2025-06-16 01:31:05"
        },
        {
          "id": 432,
          "name": "purugly",
          "caught": true,
          "caughtAt": "2025-06-16 17:06:24"
        },
        {
          "id": 461,
          "name": "weavile",
          "caught": true,
          "caughtAt": "2025-06-16 01:20:36"
        },
        {
          "id": 470,
          "name": "leafeon",
          "caught": true,
          "caughtAt": "2025-06-16 01:33:47"
        },
        {
          "id": 471,
          "name": "glaceon",
          "caught": true,
          "caughtAt": "2025-06-16 01:25:12"
        },
        {
          "id": 677,
          "name": "espurr",
          "caught": true,
          "caughtAt": "2025-06-17 22:42:52"
        },
        {
          "id": 678,
          "name": "meowstic-male",
          "caught": true,
          "caughtAt": "2025-06-17 22:18:34"
        },
        {
          "id": 700,
          "name": "sylveon",
          "caught": true,
          "caughtAt": "2025-06-17 21:34:03"
        }
      ],
      "timeSpent": 165018000
    },
    {
      "name": "vi",
      "caughtNum": 17,
      "pokemons": [
        {
          "id": 52,
          "name": "meowth",
          "caught": true,
          "caughtAt": "2025-06-16 13:19:53"
        },
        {
          "id": 53,
          "name": "persian",
          "caught": true,
          "caughtAt": "2025-06-17 00:30:19"
        },
        {
          "id": 133,
          "name": "eevee",
          "caught": true,
          "caughtAt": "2025-06-18 12:51:27"
        },
        {
          "id": 134,
          "name": "vaporeon",
          "caught": true,
          "caughtAt": "2025-06-16 12:13:11"
        },
        {
          "id": 135,
          "name": "jolteon",
          "caught": true,
          "caughtAt": "2025-06-20 00:04:06"
        },
        {
          "id": 136,
          "name": "flareon",
          "caught": true,
          "caughtAt": "2025-06-21 12:37:20"
        },
        {
          "id": 196,
          "name": "espeon",
          "caught": true,
          "caughtAt": "2025-06-21 23:27:42"
        },
        {
          "id": 197,
          "name": "umbreon",
          "caught": true,
          "caughtAt": "2025-06-17 14:35:20"
        },
        {
          "id": 215,
          "name": "sneasel",
          "caught": true,
          "caughtAt": "2025-06-16 13:02:34"
        },
        {
          "id": 431,
          "name": "glameow",
          "caught": true,
          "caughtAt": "2025-06-17 11:45:35"
        },
        {
          "id": 432,
          "name": "purugly",
          "caught": true,
          "caughtAt": "2025-06-18 23:07:04"
        },
        {
          "id": 461,
          "name": "weavile",
          "caught": true,
          "caughtAt": "2025-06-16 12:46:47"
        },
        {
          "id": 470,
          "name": "leafeon",
          "caught": true,
          "caughtAt": "2025-06-17 11:54:14"
        },
        {
          "id": 471,
          "name": "glaceon",
          "caught": true,
          "caughtAt": "2025-06-20 00:18:39"
        },
        {
          "id": 677,
          "name": "espurr",
          "caught": true,
          "caughtAt": "2025-06-17 14:24:56"
        },
        {
          "id": 678,
          "name": "meowstic-male",
          "caught": true,
          "caughtAt": "2025-06-17 12:31:43"
        },
        {
          "id": 700,
          "name": "sylveon",
          "caught": true,
          "caughtAt": "2025-06-16 13:55:22"
        }
      ],
      "timeSpent": 472471000
    },
    {
      "name": "kas",
      "caughtNum": 17,
      "pokemons": [
        {
          "id": 52,
          "name": "meowth",
          "caught": true,
          "caughtAt": "2025-06-19 10:37:23"
        },
        {
          "id": 53,
          "name": "persian",
          "caught": true,
          "caughtAt": "2025-06-23 17:52:14"
        },
        {
          "id": 133,
          "name": "eevee",
          "caught": true,
          "caughtAt": "2025-06-17 11:04:46"
        },
        {
          "id": 134,
          "name": "vaporeon",
          "caught": true,
          "caughtAt": "2025-06-17 13:10:04"
        },
        {
          "id": 135,
          "name": "jolteon",
          "caught": true,
          "caughtAt": "2025-06-17 11:12:09"
        },
        {
          "id": 136,
          "name": "flareon",
          "caught": true,
          "caughtAt": "2025-06-19 11:43:40"
        },
        {
          "id": 196,
          "name": "espeon",
          "caught": true,
          "caughtAt": "2025-06-20 20:55:01"
        },
        {
          "id": 197,
          "name": "umbreon",
          "caught": true,
          "caughtAt": "2025-06-19 22:02:50"
        },
        {
          "id": 215,
          "name": "sneasel",
          "caught": true,
          "caughtAt": "2025-06-19 22:43:12"
        },
        {
          "id": 431,
          "name": "glameow",
          "caught": true,
          "caughtAt": "2025-06-21 09:59:46"
        },
        {
          "id": 432,
          "name": "purugly",
          "caught": true,
          "caughtAt": "2025-06-16 21:56:21"
        },
        {
          "id": 461,
          "name": "weavile",
          "caught": true,
          "caughtAt": "2025-06-16 17:07:18"
        },
        {
          "id": 470,
          "name": "leafeon",
          "caught": true,
          "caughtAt": "2025-06-16 11:16:23"
        },
        {
          "id": 471,
          "name": "glaceon",
          "caught": true,
          "caughtAt": "2025-06-16 10:24:10"
        },
        {
          "id": 677,
          "name": "espurr",
          "caught": true,
          "caughtAt": "2025-06-19 18:37:04"
        },
        {
          "id": 678,
          "name": "meowstic-male",
          "caught": true,
          "caughtAt": "2025-06-19 17:26:03"
        },
        {
          "id": 700,
          "name": "sylveon",
          "caught": true,
          "caughtAt": "2025-06-19 13:07:21"
        }
      ],
      "timeSpent": 631684000
    },
    {
      "name": "sefcio",
      "caughtNum": 12,
      "pokemons": [
        {
          "id": 52,
          "name": "meowth",
          "caught": false
        },
        {
          "id": 53,
          "name": "persian",
          "caught": false
        },
        {
          "id": 133,
          "name": "eevee",
          "caught": true,
          "caughtAt": "2025-06-18 17:35:56"
        },
        {
          "id": 134,
          "name": "vaporeon",
          "caught": true,
          "caughtAt": "2025-06-23 21:24:32"
        },
        {
          "id": 135,
          "name": "jolteon",
          "caught": false
        },
        {
          "id": 136,
          "name": "flareon",
          "caught": false
        },
        {
          "id": 196,
          "name": "espeon",
          "caught": true,
          "caughtAt": "2025-06-24 13:01:46"
        },
        {
          "id": 197,
          "name": "umbreon",
          "caught": true,
          "caughtAt": "2025-06-29 19:01:27"
        },
        {
          "id": 215,
          "name": "sneasel",
          "caught": true,
          "caughtAt": "2025-06-20 20:58:39"
        },
        {
          "id": 431,
          "name": "glameow",
          "caught": true,
          "caughtAt": "2025-06-23 17:41:17"
        },
        {
          "id": 432,
          "name": "purugly",
          "caught": true,
          "caughtAt": "2025-06-16 20:37:10"
        },
        {
          "id": 461,
          "name": "weavile",
          "caught": true,
          "caughtAt": "2025-06-23 17:19:57"
        },
        {
          "id": 470,
          "name": "leafeon",
          "caught": true,
          "caughtAt": "2025-06-24 14:11:29"
        },
        {
          "id": 471,
          "name": "glaceon",
          "caught": false
        },
        {
          "id": 677,
          "name": "espurr",
          "caught": true,
          "caughtAt": "2025-06-20 14:29:37"
        },
        {
          "id": 678,
          "name": "meowstic-male",
          "caught": true,
          "caughtAt": "2025-06-18 15:44:31"
        },
        {
          "id": 700,
          "name": "sylveon",
          "caught": true,
          "caughtAt": "2025-06-27 13:06:42"
        }
      ],
      "timeSpent": 1117457000
    },
    {
      "name": "h0tp",
      "caughtNum": 11,
      "pokemons": [
        {
          "id": 52,
          "name": "meowth",
          "caught": true,
          "caughtAt": "2025-06-21 16:34:51"
        },
        {
          "id": 53,
          "name": "persian",
          "caught": true,
          "caughtAt": "2025-06-20 21:45:18"
        },
        {
          "id": 133,
          "name": "eevee",
          "caught": false
        },
        {
          "id": 134,
          "name": "vaporeon",
          "caught": false
        },
        {
          "id": 135,
          "name": "jolteon",
          "caught": true,
          "caughtAt": "2025-06-21 17:17:37"
        },
        {
          "id": 136,
          "name": "flareon",
          "caught": false
        },
        {
          "id": 196,
          "name": "espeon",
          "caught": false
        },
        {
          "id": 197,
          "name": "umbreon",
          "caught": true,
          "caughtAt": "2025-06-21 22:14:38"
        },
        {
          "id": 215,
          "name": "sneasel",
          "caught": true,
          "caughtAt": "2025-06-27 17:39:59"
        },
        {
          "id": 431,
          "name": "glameow",
          "caught": false
        },
        {
          "id": 432,
          "name": "purugly",
          "caught": false
        },
        {
          "id": 461,
          "name": "weavile",
          "caught": true,
          "caughtAt": "2025-06-23 22:04:13"
        },
        {
          "id": 470,
          "name": "leafeon",
          "caught": true,
          "caughtAt": "2025-06-20 23:51:46"
        },
        {
          "id": 471,
          "name": "glaceon",
          "caught": true,
          "caughtAt": "2025-06-27 14:27:51"
        },
        {
          "id": 677,
          "name": "espurr",
          "caught": true,
          "caughtAt": "2025-06-18 17:57:40"
        },
        {
          "id": 678,
          "name": "meowstic-male",
          "caught": true,
          "caughtAt": "2025-06-16 12:32:01"
        },
        {
          "id": 700,
          "name": "sylveon",
          "caught": true,
          "caughtAt": "2025-06-16 00:56:06"
        }
      ],
      "timeSpent": 1010633000
    },
    {
      "name": "gcwen3166",
      "caughtNum": 8,
      "pokemons": [
        {
          "id": 52,
          "name": "meowth",
          "caught": true,
          "caughtAt": "2025-06-25 21:42:46"
        },
        {
          "id": 53,
          "name": "persian",
          "caught": true,
          "caughtAt": "2025-06-23 18:30:57"
        },
        {
          "id": 133,
          "name": "eevee",
          "caught": true,
          "caughtAt": "2025-06-21 16:00:03"
        },
        {
          "id": 134,
          "name": "vaporeon",
          "caught": false
        },
        {
          "id": 135,
          "name": "jolteon",
          "caught": false
        },
        {
          "id": 136,
          "name": "flareon",
          "caught": false
        },
        {
          "id": 196,
          "name": "espeon",
          "caught": false
        },
        {
          "id": 197,
          "name": "umbreon",
          "caught": false
        },
        {
          "id": 215,
          "name": "sneasel",
          "caught": true,
          "caughtAt": "2025-06-18 22:12:47"
        },
        {
          "id": 431,
          "name": "glameow",
          "caught": true,
          "caughtAt": "2025-06-23 18:32:40"
        },
        {
          "id": 432,
          "name": "purugly",
          "caught": true,
          "caughtAt": "2025-06-22 13:11:29"
        },
        {
          "id": 461,
          "name": "weavile",
          "caught": false
        },
        {
          "id": 470,
          "name": "leafeon",
          "caught": false
        },
        {
          "id": 471,
          "name": "glaceon",
          "caught": false
        },
        {
          "id": 677,
          "name": "espurr",
          "caught": true,
          "caughtAt": "2025-06-23 18:25:32"
        },
        {
          "id": 678,
          "name": "meowstic-male",
          "caught": true,
          "caughtAt": "2025-06-21 12:46:21"
        },
        {
          "id": 700,
          "name": "sylveon",
          "caught": false
        }
      ],
      "timeSpent": 602999000
    },
    {
      "name": "peace",
      "caughtNum": 8,
      "pokemons": [
        {
          "id": 52,
          "name": "meowth",
          "caught": false
        },
        {
          "id": 53,
          "name": "persian",
          "caught": false
        },
        {
          "id": 133,
          "name": "eevee",
          "caught": false
        },
        {
          "id": 134,
          "name": "vaporeon",
          "caught": false
        },
        {
          "id": 135,
          "name": "jolteon",
          "caught": true,
          "caughtAt": "2025-06-23 14:33:18"
        },
        {
          "id": 136,
          "name": "flareon",
          "caught": true,
          "caughtAt": "2025-06-19 10:38:41"
        },
        {
          "id": 196,
          "name": "espeon",
          "caught": true,
          "caughtAt": "2025-06-27 23:58:53"
        },
        {
          "id": 197,
          "name": "umbreon",
          "caught": true,
          "caughtAt": "2025-06-22 22:59:14"
        },
        {
          "id": 215,
          "name": "sneasel",
          "caught": false
        },
        {
          "id": 431,
          "name": "glameow",
          "caught": true,
          "caughtAt": "2025-06-20 15:43:01"
        },
        {
          "id": 432,
          "name": "purugly",
          "caught": false
        },
        {
          "id": 461,
          "name": "weavile",
          "caught": true,
          "caughtAt": "2025-06-30 23:31:46"
        },
        {
          "id": 470,
          "name": "leafeon",
          "caught": false
        },
        {
          "id": 471,
          "name": "glaceon",
          "caught": false
        },
        {
          "id": 677,
          "name": "espurr",
          "caught": true,
          "caughtAt": "2025-06-20 15:40:41"
        },
        {
          "id": 678,
          "name": "meowstic-male",
          "caught": true,
          "caughtAt": "2025-06-20 22:21:04"
        },
        {
          "id": 700,
          "name": "sylveon",
          "caught": false
        }
      ],
      "timeSpent": 996785000
    },
    {
      "name": "johanna",
      "caughtNum": 4,
      "pokemons": [
        {
          "id": 52,
          "name": "meowth",
          "caught": true,
          "caughtAt": "2025-06-20 13:33:03"
        },
        {
          "id": 53,
          "name": "persian",
          "caught": false
        },
        {
          "id": 133,
          "name": "eevee",
          "caught": false
        },
        {
          "id": 134,
          "name": "vaporeon",
          "caught": false
        },
        {
          "id": 135,
          "name": "jolteon",
          "caught": false
        },
        {
          "id": 136,
          "name": "flareon",
          "caught": false
        },
        {
          "id": 196,
          "name": "espeon",
          "caught": false
        },
        {
          "id": 197,
          "name": "umbreon",
          "caught": false
        },
        {
          "id": 215,
          "name": "sneasel",
          "caught": true,
          "caughtAt": "2025-06-20 15:41:30"
        },
        {
          "id": 431,
          "name": "glameow",
          "caught": true,
          "caughtAt": "2025-06-16 02:34:08"
        },
        {
          "id": 432,
          "name": "purugly",
          "caught": false
        },
        {
          "id": 461,
          "name": "weavile",
          "caught": false
        },
        {
          "id": 470,
          "name": "leafeon",
          "caught": false
        },
        {
          "id": 471,
          "name": "glaceon",
          "caught": false
        },
        {
          "id": 677,
          "name": "espurr",
          "caught": true,
          "caughtAt": "2025-06-20 13:39:57"
        },
        {
          "id": 678,
          "name": "meowstic-male",
          "caught": false
        },
        {
          "id": 700,
          "name": "sylveon",
          "caught": false
        }
      ],
      "timeSpent": 392842000
    },
    {
      "name": "morganite",
      "caughtNum": 1,
      "pokemons": [
        {
          "id": 52,
          "name": "meowth",
          "caught": false
        },
        {
          "id": 53,
          "name": "persian",
          "caught": false
        },
        {
          "id": 133,
          "name": "eevee",
          "caught": false
        },
        {
          "id": 134,
          "name": "vaporeon",
          "caught": false
        },
        {
          "id": 135,
          "name": "jolteon",
          "caught": false
        },
        {
          "id": 136,
          "name": "flareon",
          "caught": false
        },
        {
          "id": 196,
          "name": "espeon",
          "caught": false
        },
        {
          "id": 197,
          "name": "umbreon",
          "caught": false
        },
        {
          "id": 215,
          "name": "sneasel",
          "caught": true,
          "caughtAt": "2025-06-17 21:44:16"
        },
        {
          "id": 431,
          "name": "glameow",
          "caught": false
        },
        {
          "id": 432,
          "name": "purugly",
          "caught": false
        },
        {
          "id": 461,
          "name": "weavile",
          "caught": false
        },
        {
          "id": 470,
          "name": "leafeon",
          "caught": false
        },
        {
          "id": 471,
          "name": "glaceon",
          "caught": false
        },
        {
          "id": 677,
          "name": "espurr",
          "caught": false
        },
        {
          "id": 678,
          "name": "meowstic-male",
          "caught": false
        },
        {
          "id": 700,
          "name": "sylveon",
          "caught": false
        }
      ],
      "timeSpent": 0
    }
  ]
};

export const results: EventResult[] = [
  event1,
  event2,
  event3cats
];

import {EventResult} from '../types/events';

const event1 = {
  "rules": {
    "eventName": "KAS's alpha event #1",
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
    "eventName": "Doc's first event",
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

export const results: EventResult[] = [
  event1,
  event2
];

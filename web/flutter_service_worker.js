'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "461488b5cc08eee5fd422bc03abbe638",
"version.json": "65c3bba3966ad70257529efb4a5b3d11",
"index.html": "74b5771d757f87e99cf8261634241cce",
"/": "74b5771d757f87e99cf8261634241cce",
"main.dart.js": "e7eea359cb79fe21622036c2558aee75",
"sqlite3.wasm": "7734a2a8e1fb023fc63a7b84b3e9335c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"drift_worker.js": "b1b42d2639a16f676982db426871cdba",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6e4ae92b54d4e59277cd3c1fe33e33c6",
"assets/AssetManifest.json": "e6aed44996f31a0c19cce2c1e55daf79",
"assets/NOTICES": "cdbe86b5fa70ab3db5531afbff53c844",
"assets/FontManifest.json": "e64f032a1bc2dd5f0b2da3cb411ad30e",
"assets/AssetManifest.bin.json": "d5822b0816e305e15c37b5c9f4d5ff25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "856de54a6d8053bec5c64450909853c4",
"assets/fonts/MaterialIcons-Regular.otf": "71adbe89ac8045871ee25e03fea5fc01",
"assets/assets/pngs/icons/ic_ticket_code.png": "6b4c1c6a23a7a95c58971832b8822312",
"assets/assets/pngs/icons/ic_warehouse_rotation.png": "26216b04bf70de4a424387e08b9da929",
"assets/assets/pngs/icons/bg_module.png": "fdd47c45028753e1b49d1db5fe847b59",
"assets/assets/pngs/icons/ic_user_plus.png": "1820019b5304cd754771bd0632794067",
"assets/assets/pngs/icons/ic_chevron_down.png": "b7f268004f7822291206b7fee100722e",
"assets/assets/pngs/icons/ic_customer.png": "af6a84a736779a0efb6e4b120a7b36f9",
"assets/assets/pngs/icons/ic_home_active.png": "0f3c205be8ec161b0e50c33e4ae32b20",
"assets/assets/pngs/icons/ic_trash.png": "2e46668a104b219ea46ee59660be8b2a",
"assets/assets/pngs/icons/ic_setting_invoice.png": "ddeac484b19f3ab1c8907138f6fc2427",
"assets/assets/pngs/icons/ic_empty_order2.png": "5233b4e54f6d65c32dce0801208bc835",
"assets/assets/pngs/icons/logo_app.png": "4e920a3fcf048966747ee2a3dd9eddc9",
"assets/assets/pngs/icons/ic_calendar.png": "1de1108c849665deb8d887f846c53af5",
"assets/assets/pngs/icons/ic_order2.png": "3aca94ee17a1c41c7f79823634719e91",
"assets/assets/pngs/icons/1.5x/ic_ticket_code.png": "4b6b58fe933381e25df909911a79e9f2",
"assets/assets/pngs/icons/1.5x/ic_warehouse_rotation.png": "0f7880c33f83edf0b69e2161c6688862",
"assets/assets/pngs/icons/1.5x/bg_module.png": "fdd47c45028753e1b49d1db5fe847b59",
"assets/assets/pngs/icons/1.5x/ic_user_plus.png": "764e87a07fa69faebb885043afcd6e12",
"assets/assets/pngs/icons/1.5x/ic_chevron_down.png": "db080ab2b524612763269d073bf579b5",
"assets/assets/pngs/icons/1.5x/ic_customer.png": "1effff998c85c2e417c9dce740019265",
"assets/assets/pngs/icons/1.5x/ic_home_active.png": "c591babf119e3bd1dd3e3696c24aa944",
"assets/assets/pngs/icons/1.5x/ic_trash.png": "38245f15d4dcdccf59981375b4ca646e",
"assets/assets/pngs/icons/1.5x/ic_setting_invoice.png": "d64bfdf1684b60fc91ff8e50b33c00d9",
"assets/assets/pngs/icons/1.5x/ic_empty_order2.png": "28a0683461f189bcd465f6e77611cf2e",
"assets/assets/pngs/icons/1.5x/logo_app.png": "00784bc2a63f60feb824d363f16f348f",
"assets/assets/pngs/icons/1.5x/ic_calendar.png": "308c90b846c57fd8f2b38d2e37520ac0",
"assets/assets/pngs/icons/1.5x/ic_order2.png": "d9c8582939cdc05d719993417300874a",
"assets/assets/pngs/icons/1.5x/ic_notification.png": "4c67e8ea8c200445f2ab5911c43856c5",
"assets/assets/pngs/icons/1.5x/ic_list.png": "52ae70c49f83a30dc5ee1828dd1819e1",
"assets/assets/pngs/icons/1.5x/bg_menu.png": "a5d09ac0ea62b69dcec877f9c9b7d7cf",
"assets/assets/pngs/icons/1.5x/ic_unit.png": "a27493c548f47eb3c2fdfc5a24107ff2",
"assets/assets/pngs/icons/1.5x/ic_bell_active.png": "e263e7375e3bda773450f49446fed471",
"assets/assets/pngs/icons/1.5x/ic_message.png": "4988d5728a5e77bfea727e92a1909d7d",
"assets/assets/pngs/icons/1.5x/ic_report.png": "402105b5d591682f434774b2e476ff1b",
"assets/assets/pngs/icons/1.5x/ic_setting.png": "1d2de8eef130bd8076db4c29bb9c86cb",
"assets/assets/pngs/icons/1.5x/ic_user.png": "4dd41184bcf111f2ba7bbceb5acec94b",
"assets/assets/pngs/icons/1.5x/ic_home.png": "96c01ec9d3a93dd66adc0d8df6e8f1e4",
"assets/assets/pngs/icons/1.5x/ic_camera.png": "acfad6c1722ba79c5ee168857e66a1b7",
"assets/assets/pngs/icons/1.5x/ic_bell.png": "d04ec7d431f36e54a7e44048d66e1c76",
"assets/assets/pngs/icons/1.5x/ic_status.png": "38d540bd92c22074162d11e6ac8defb4",
"assets/assets/pngs/icons/1.5x/ic_hide_new.png": "04ab3aa4d894a80887c8818e84489d09",
"assets/assets/pngs/icons/1.5x/ic_history.png": "53eb94467f6af7f9f9ccbe92d555f930",
"assets/assets/pngs/icons/1.5x/ic_bank_note.png": "3286bc09de2c146aee20d6df25de282d",
"assets/assets/pngs/icons/1.5x/ic_plus.png": "7a51251f3cffe80d8788d1432b612083",
"assets/assets/pngs/icons/1.5x/ic_card.png": "21d592a311635ecec77d0120266b0ef2",
"assets/assets/pngs/icons/1.5x/ic_shop_light.png": "2ed2e98b751d46d1d91b88dba468859b",
"assets/assets/pngs/icons/1.5x/ic_arrow_small_right.png": "37d586686d945ee01e505046a21301af",
"assets/assets/pngs/icons/1.5x/ic_transaction_overview.png": "2537ff918bf24f9e758a1b3341244828",
"assets/assets/pngs/icons/1.5x/ic_wallet_light.png": "c3bd451eee23908da38ec7b027d751cb",
"assets/assets/pngs/icons/1.5x/ic_angle_double_small_right.png": "bd017f1dbcaf4ed4b72e74e09b89bb34",
"assets/assets/pngs/icons/1.5x/ic_setting_active.png": "557af4a0315beedcfee0979a7810d54e",
"assets/assets/pngs/icons/1.5x/ic_warehouse.png": "74d934bbbe540119d363665fd49c012f",
"assets/assets/pngs/icons/1.5x/ic_critical_light.png": "d069f2a0e48787602b4b6c34c16098a2",
"assets/assets/pngs/icons/1.5x/ic_filter.png": "a7c70611838e6ff8716c7708ca7d0a32",
"assets/assets/pngs/icons/1.5x/ic_clock.png": "7118a30df231a2b0ee6467743562bf31",
"assets/assets/pngs/icons/1.5x/ic_product_category.png": "b5c9f5d869b1540f124579f507109fa7",
"assets/assets/pngs/icons/1.5x/ic_print_light.png": "af6c2c64de70bac8de9e6ae8b078f894",
"assets/assets/pngs/icons/1.5x/ic_delete_field.png": "23aabb32cb2154f2613a2e4415800202",
"assets/assets/pngs/icons/1.5x/ic_logout.png": "f18330e1876e4769f94bb161d7d4115e",
"assets/assets/pngs/icons/1.5x/ic_camera_sf.png": "2ab394a0485b2f9a47f398a815534227",
"assets/assets/pngs/icons/1.5x/ic_ticket.png": "519dd2035805f611f566f4f5a9cb1d49",
"assets/assets/pngs/icons/1.5x/ic_database_light.png": "714d533ad2df26e18799acd5f8f8514f",
"assets/assets/pngs/icons/1.5x/ic_scan_code.png": "21f288baca6b408ea7979dae0c9e15b3",
"assets/assets/pngs/icons/1.5x/ic_group_light.png": "be04bbcf8c4c9d5e9c8480c57ae435a9",
"assets/assets/pngs/icons/1.5x/ic_edit.png": "5490378a572b8b66da3e23b134d98745",
"assets/assets/pngs/icons/1.5x/ic_passcode_lock.png": "4e104a5c899f15dd4549b7f805dec150",
"assets/assets/pngs/icons/1.5x/ic_box.png": "bb30886f232d038c3fdc9e31761ee717",
"assets/assets/pngs/icons/1.5x/ic_search.png": "fc8c87fb039d326ce1a089bd11999cce",
"assets/assets/pngs/icons/1.5x/ic_arrow_narrow_left.png": "5ace7a08f619d3b735b75f355680704f",
"assets/assets/pngs/icons/1.5x/ic_en.png": "e4f481b125cb974e6e21a722f4cce465",
"assets/assets/pngs/icons/1.5x/ic_setting_email.png": "f8965f65afc4055dcb0d9c7b99885541",
"assets/assets/pngs/icons/1.5x/ic_history_sync.png": "84ca79e72fa359c8198efee4ad09b4c2",
"assets/assets/pngs/icons/1.5x/ic_back.png": "a40645da9ff7a432d63f3b8170697c08",
"assets/assets/pngs/icons/1.5x/ic_commodity_group.png": "9231928b00c3ae89153822023ed43027",
"assets/assets/pngs/icons/1.5x/bg_login.png": "d7cf7a7bdff0c099d40b57fddd058746",
"assets/assets/pngs/icons/1.5x/ic_history_sync_active.png": "5acfa944346439803dcfc561a2ff5fa3",
"assets/assets/pngs/icons/1.5x/ic_wallet.png": "72d9737012b9dc0685e37d750e4bc49e",
"assets/assets/pngs/icons/1.5x/ic_machine.png": "acc298fb3564d68c508f69666f14a83e",
"assets/assets/pngs/icons/1.5x/ic_inventory_inquiry.png": "4732aecf64ea6c55d334aed3e1e0ec08",
"assets/assets/pngs/icons/1.5x/bg_home.png": "e804f2f7a3cb9aa70a7f4df0d29899fc",
"assets/assets/pngs/icons/1.5x/ic_account_avartar.jpg": "b5c0ab57ffb1564a71c3672277f07bdc",
"assets/assets/pngs/icons/1.5x/ic_cccd.png": "50add89c1dea7c6ba369615fceda0f43",
"assets/assets/pngs/icons/1.5x/ic_eyes_new.png": "348075e0517778d2b911b10cf0c901e9",
"assets/assets/pngs/icons/1.5x/ic_inventory_physical.png": "ffc1b1f68f91a3cb109f858ba0035b97",
"assets/assets/pngs/icons/1.5x/ic_product.png": "3b3128f6a7a2db3dcf303e384bf160f1",
"assets/assets/pngs/icons/1.5x/ic_magnifying_glass.png": "5b12ad88f2de5a29ed789d2ff5a66ae5",
"assets/assets/pngs/icons/1.5x/ic_file_dock_search_light.png": "8cb854e3be9de77f36e07e02b7b3e5d2",
"assets/assets/pngs/icons/1.5x/ic_order.png": "6993a083479fb43cbd0a9ae97dbfa190",
"assets/assets/pngs/icons/1.5x/ic_setting_payment.png": "2a9277c6a4ba27703148a17b2af10372",
"assets/assets/pngs/icons/1.5x/ic_empty_order.png": "2a706ae7307e97ee99f4b7a4a642074d",
"assets/assets/pngs/icons/1.5x/ic_transfer.png": "0c49c56286a1c598f760b040147b9b4f",
"assets/assets/pngs/icons/1.5x/ic_setting_password.png": "1e0c1d8d9f98872666bdce72b176e805",
"assets/assets/pngs/icons/1.5x/ic_car.png": "302626cb2c65a21aaec4791593247b7d",
"assets/assets/pngs/icons/1.5x/ic_vn.png": "092dc732379c47a7cda97e03bd0c4a80",
"assets/assets/pngs/icons/ic_notification.png": "2429db51d9c9619f21ac0e21583d6ffa",
"assets/assets/pngs/icons/ic_list.png": "42d77c8a95f8ba9190a170d258e418f9",
"assets/assets/pngs/icons/bg_menu.png": "e60ed23b32b8dbd2714e4decfbe85f8f",
"assets/assets/pngs/icons/ic_unit.png": "e29971a0d2443cd75a527f40126a9c84",
"assets/assets/pngs/icons/ic_bell_active.png": "04a377b570de82cdbd013880c3c7cbd3",
"assets/assets/pngs/icons/ic_message.png": "864a94d7b9397771a51a19922b691b38",
"assets/assets/pngs/icons/ic_report.png": "a8cc9113a5a90af35a429756d58edca0",
"assets/assets/pngs/icons/ic_setting.png": "d64faec04dac5f91284770d3df7cd16f",
"assets/assets/pngs/icons/ic_user.png": "33eecec0087449546f142fbde40d6160",
"assets/assets/pngs/icons/ic_home.png": "811da6c0f6b6fc984311f2bdbdbc26e3",
"assets/assets/pngs/icons/ic_camera.png": "92836db9f60191a3f21dbd6b2c791330",
"assets/assets/pngs/icons/2.0x/ic_ticket_code.png": "32d379378d68c29542b058d4bf3ed6e1",
"assets/assets/pngs/icons/2.0x/ic_warehouse_rotation.png": "6dadb9c51b9be3d4b8469e8fff0a31c8",
"assets/assets/pngs/icons/2.0x/bg_module.png": "fdd47c45028753e1b49d1db5fe847b59",
"assets/assets/pngs/icons/2.0x/ic_user_plus.png": "cc150744d186b00ce833a0f5828f6797",
"assets/assets/pngs/icons/2.0x/ic_chevron_down.png": "ce0fef2243a17f1f45748bd98011e9ad",
"assets/assets/pngs/icons/2.0x/ic_customer.png": "b0943ae80e3ef32c53321b284345a61a",
"assets/assets/pngs/icons/2.0x/ic_home_active.png": "5b8c044dd28adef916a6c62863d17b0a",
"assets/assets/pngs/icons/2.0x/ic_trash.png": "8744f479a4d25295b90daa539e953a4e",
"assets/assets/pngs/icons/2.0x/ic_setting_invoice.png": "ccb4022105229243dcd750b75deea375",
"assets/assets/pngs/icons/2.0x/ic_empty_order2.png": "a5b226dcefa43b6b23e447005d24775f",
"assets/assets/pngs/icons/2.0x/logo_app.png": "219908ea5e6cdcd670930af98aaa48ef",
"assets/assets/pngs/icons/2.0x/ic_calendar.png": "7b72fb6c3f71cf8d2398932fefa4a88c",
"assets/assets/pngs/icons/2.0x/ic_order2.png": "e74b6e8b7be922cd80dad4e3c4f5f2e4",
"assets/assets/pngs/icons/2.0x/ic_notification.png": "42ccde3b52afaef9c94ad2faa145b379",
"assets/assets/pngs/icons/2.0x/ic_list.png": "63d4657b03ad72572e31b9683467503e",
"assets/assets/pngs/icons/2.0x/bg_menu.png": "5fab152d905ea5e1a5f16b65e0541c31",
"assets/assets/pngs/icons/2.0x/ic_unit.png": "4557de5c03a79c812a8db711fc24af63",
"assets/assets/pngs/icons/2.0x/ic_bell_active.png": "532dad95b76df18203787666a82357f5",
"assets/assets/pngs/icons/2.0x/ic_message.png": "10694d29fc6d3b30bb87339c3cdad6f6",
"assets/assets/pngs/icons/2.0x/ic_report.png": "9b46fac3bd8d9910f52530e169b09614",
"assets/assets/pngs/icons/2.0x/ic_setting.png": "13104bee1c4ff2e59165e348b35314b8",
"assets/assets/pngs/icons/2.0x/ic_user.png": "4176495f42d8e4fd69b085eb1fa4ac57",
"assets/assets/pngs/icons/2.0x/ic_home.png": "c8834221e87fa16b877bdf5537637e75",
"assets/assets/pngs/icons/2.0x/ic_camera.png": "46a2edfb3fcdc8195e543905b5b7ce81",
"assets/assets/pngs/icons/2.0x/ic_bell.png": "8d873fbc2f9da27aa5f98673ae7869df",
"assets/assets/pngs/icons/2.0x/ic_status.png": "8ff7d9ea0c6356ed6d0b65817c5a0050",
"assets/assets/pngs/icons/2.0x/ic_hide_new.png": "96bacaadb9bdd68e9078bf2bd3aa50b8",
"assets/assets/pngs/icons/2.0x/ic_history.png": "9c0f78c0dfbce3a15e84be8b232c23d9",
"assets/assets/pngs/icons/2.0x/ic_bank_note.png": "66ff7caf9c2947861dafa99cc5d39957",
"assets/assets/pngs/icons/2.0x/ic_plus.png": "649be06d90c61a5b142374aa9ee58b61",
"assets/assets/pngs/icons/2.0x/ic_card.png": "96472234afe9f411f82ac73d9ed223ff",
"assets/assets/pngs/icons/2.0x/ic_shop_light.png": "19f2df0e79176d510a34dbadee515b1e",
"assets/assets/pngs/icons/2.0x/ic_arrow_small_right.png": "aace93e1ccb7c8b762098ce76850a285",
"assets/assets/pngs/icons/2.0x/ic_transaction_overview.png": "4bfb62dc34d0ad202b1bc0263828b24f",
"assets/assets/pngs/icons/2.0x/ic_wallet_light.png": "d07ebb657a2df239bed485c98fe3d35d",
"assets/assets/pngs/icons/2.0x/ic_angle_double_small_right.png": "b10a7c6d501c0e9f029ca368e5f7eb14",
"assets/assets/pngs/icons/2.0x/ic_setting_active.png": "929586e0fc3ee132d05f9e30e35cddaf",
"assets/assets/pngs/icons/2.0x/ic_warehouse.png": "ce349e82b55eb126edca36cea2b9bb27",
"assets/assets/pngs/icons/2.0x/ic_critical_light.png": "02a9890ab540fc9a6a5dcfe0015336be",
"assets/assets/pngs/icons/2.0x/ic_filter.png": "81f442571028df4b35db2d22af7c8157",
"assets/assets/pngs/icons/2.0x/ic_clock.png": "964ff40f1058c781c5a4581629ea336c",
"assets/assets/pngs/icons/2.0x/ic_product_category.png": "72c1c373546f34e40125ac195d59628d",
"assets/assets/pngs/icons/2.0x/ic_print_light.png": "d38e76085f77527fcf6b11ad8f82d8e0",
"assets/assets/pngs/icons/2.0x/ic_delete_field.png": "ddfe9673cb507873938d22a8b76468c6",
"assets/assets/pngs/icons/2.0x/ic_logout.png": "5441445e302a1b62c19a6a44a4c8be20",
"assets/assets/pngs/icons/2.0x/ic_camera_sf.png": "36c9adf26c1f91be84a030f75b689dd5",
"assets/assets/pngs/icons/2.0x/ic_ticket.png": "bcb20a6b6eb24217874f671c274ffeb1",
"assets/assets/pngs/icons/2.0x/ic_database_light.png": "e26003b4279699b7da225377892d1a77",
"assets/assets/pngs/icons/2.0x/ic_scan_code.png": "f7c1c49bcb4906d1d231ec1621d14f33",
"assets/assets/pngs/icons/2.0x/ic_group_light.png": "428535773a3300b013254acdd2066f24",
"assets/assets/pngs/icons/2.0x/ic_edit.png": "a22eb3dc15422c16ea91f189dfe6e8d3",
"assets/assets/pngs/icons/2.0x/ic_passcode_lock.png": "1a522c1aec418d20eccffd755e72669d",
"assets/assets/pngs/icons/2.0x/ic_box.png": "49d6c0cf164779ee1fa4b66379ce0bdf",
"assets/assets/pngs/icons/2.0x/ic_search.png": "e64d1125b8940c6b0475fc835da01387",
"assets/assets/pngs/icons/2.0x/ic_arrow_narrow_left.png": "58a45fa9209189f8b2a6e3699a0be76e",
"assets/assets/pngs/icons/2.0x/ic_en.png": "c5492353c74073a5b52d1463c07d1419",
"assets/assets/pngs/icons/2.0x/ic_setting_email.png": "79351e5b1e02bcbe7cb779e0822c4679",
"assets/assets/pngs/icons/2.0x/ic_history_sync.png": "a05166b619456728e6d5587bf0bee495",
"assets/assets/pngs/icons/2.0x/ic_back.png": "f9962c81b9109eb75db3eefcb38b852e",
"assets/assets/pngs/icons/2.0x/ic_commodity_group.png": "c53b701428ad58aacafc780e6231217f",
"assets/assets/pngs/icons/2.0x/bg_login.png": "388174618b398f4f01c8318ed15723bb",
"assets/assets/pngs/icons/2.0x/ic_history_sync_active.png": "bc3462c75a2141e6a4805a6b3ed21487",
"assets/assets/pngs/icons/2.0x/ic_wallet.png": "4db3afa0109cddc17e58aa18f4adc1d1",
"assets/assets/pngs/icons/2.0x/ic_machine.png": "79e00650008d03ccf7b88125dbea47d5",
"assets/assets/pngs/icons/2.0x/ic_inventory_inquiry.png": "87df607a13903a681916617b03e273a0",
"assets/assets/pngs/icons/2.0x/bg_home.png": "dee5a7a197052464f528ff8fac30712c",
"assets/assets/pngs/icons/2.0x/ic_account_avartar.jpg": "b5c0ab57ffb1564a71c3672277f07bdc",
"assets/assets/pngs/icons/2.0x/ic_cccd.png": "6e2874431edcec36eb109cb0d0f190ad",
"assets/assets/pngs/icons/2.0x/ic_eyes_new.png": "febb044bb2d13594d0cc95fc6003650b",
"assets/assets/pngs/icons/2.0x/ic_inventory_physical.png": "dcf9223b8423cc8255145e509d5f1b65",
"assets/assets/pngs/icons/2.0x/ic_product.png": "a1b7b7708625552b707ea4b4f03c9ab7",
"assets/assets/pngs/icons/2.0x/ic_magnifying_glass.png": "f0b1d4643e5a92c80f3d4f6155fbc278",
"assets/assets/pngs/icons/2.0x/ic_file_dock_search_light.png": "ee9df5f7134831adafa3eabff5f7c454",
"assets/assets/pngs/icons/2.0x/ic_order.png": "75683e8a2cf6a755ad6a049c60fd2b35",
"assets/assets/pngs/icons/2.0x/ic_setting_payment.png": "d45a2c75599b3af389c9099ce0262a78",
"assets/assets/pngs/icons/2.0x/ic_empty_order.png": "ed101cba09d9691a30abc3dfb569dc2b",
"assets/assets/pngs/icons/2.0x/ic_transfer.png": "f8b2103ef8a7942a78f54b5d6e372c1d",
"assets/assets/pngs/icons/2.0x/ic_setting_password.png": "28e2cda415b259415da8c3f78d979333",
"assets/assets/pngs/icons/2.0x/ic_car.png": "7730a35d8b6e4df0ae690afaff75045e",
"assets/assets/pngs/icons/2.0x/ic_vn.png": "dd815d379a50f67c7f95a471725f7f67",
"assets/assets/pngs/icons/ic_bell.png": "6697aba54868c8b32cf518f520950494",
"assets/assets/pngs/icons/ic_status.png": "208a04ee8df54e050edda7d9767aa0ca",
"assets/assets/pngs/icons/ic_hide_new.png": "aee211c2ffebaf3955981dc70a98b037",
"assets/assets/pngs/icons/ic_history.png": "254efbbc5a2334a488faabf0b1280c45",
"assets/assets/pngs/icons/ic_bank_note.png": "7f2e1c4f1c878ae35024b4ee32ae5855",
"assets/assets/pngs/icons/ic_plus.png": "3f084894a8133b8a9ad28ac06855b8c9",
"assets/assets/pngs/icons/ic_card.png": "50740b9d7053f4b13016b90225e976b7",
"assets/assets/pngs/icons/ic_shop_light.png": "f918c75d64b854f2f8b30d867e9cc8c6",
"assets/assets/pngs/icons/ic_arrow_small_right.png": "84a253703dbe4b668377a13484a9a950",
"assets/assets/pngs/icons/ic_transaction_overview.png": "00e68c487b1dd6d5fe13068fc2a8e8cd",
"assets/assets/pngs/icons/ic_wallet_light.png": "81272c8350e0c1d9411ca2d4136a06d5",
"assets/assets/pngs/icons/ic_angle_double_small_right.png": "fc372e932e274b142e5813b77491ab64",
"assets/assets/pngs/icons/3.0x/ic_ticket_code.png": "2bc0168eff9fdce3a3426b075eb8bda9",
"assets/assets/pngs/icons/3.0x/ic_warehouse_rotation.png": "61302805a1c825bc9b1ff386f1ddf9c8",
"assets/assets/pngs/icons/3.0x/bg_module.png": "fdd47c45028753e1b49d1db5fe847b59",
"assets/assets/pngs/icons/3.0x/ic_user_plus.png": "c6a071fc46656cc064b568d40587c653",
"assets/assets/pngs/icons/3.0x/ic_chevron_down.png": "9e9d7271cfb805382bc4a681d8dcb5bb",
"assets/assets/pngs/icons/3.0x/ic_customer.png": "f1402f99b0b5881743033d1977b46598",
"assets/assets/pngs/icons/3.0x/ic_home_active.png": "fffc4cad36b8d5f7a1bd9601de5a0849",
"assets/assets/pngs/icons/3.0x/ic_trash.png": "016f836b0c3423c414f2d2de43858044",
"assets/assets/pngs/icons/3.0x/ic_setting_invoice.png": "d610f6c727fdd80a05231d39669ee239",
"assets/assets/pngs/icons/3.0x/ic_empty_order2.png": "30b92c52c4d03ad334fa9bcc6b34b2da",
"assets/assets/pngs/icons/3.0x/logo_app.png": "3d8b227d2f4aac537920f11ace3103d3",
"assets/assets/pngs/icons/3.0x/ic_calendar.png": "1de1108c849665deb8d887f846c53af5",
"assets/assets/pngs/icons/3.0x/ic_order2.png": "c6b58c0880f2415cec29dc5d1e1dade4",
"assets/assets/pngs/icons/3.0x/ic_notification.png": "9c9f41d65de6d6cdfbad74fe670ee44f",
"assets/assets/pngs/icons/3.0x/ic_list.png": "38fd5320d1c2c63fa41cec8beb442bba",
"assets/assets/pngs/icons/3.0x/bg_menu.png": "539d5744d479e7de6a09a53d1cba8617",
"assets/assets/pngs/icons/3.0x/ic_unit.png": "6b84fa761f2bc58fff46d5f5f7c2d248",
"assets/assets/pngs/icons/3.0x/ic_bell_active.png": "e091e0868db9f92fa121d0aaa78be760",
"assets/assets/pngs/icons/3.0x/ic_message.png": "e4e0eb4f8cff0a685f9b189c5fe4a015",
"assets/assets/pngs/icons/3.0x/ic_report.png": "8978285104d926a843eba3bcb3ba2cbe",
"assets/assets/pngs/icons/3.0x/ic_setting.png": "a79d542d3ba76200f425df237e0609b7",
"assets/assets/pngs/icons/3.0x/ic_user.png": "bdc28b5e0e58bccaa4654907c048018e",
"assets/assets/pngs/icons/3.0x/ic_home.png": "f9990a07e35e72da4b1c486c1ee64e46",
"assets/assets/pngs/icons/3.0x/ic_camera.png": "ef0590ad3eacfb9276263eac398457d4",
"assets/assets/pngs/icons/3.0x/ic_bell.png": "cdf5a9983d1097686269b635e7ae5628",
"assets/assets/pngs/icons/3.0x/ic_status.png": "bba41ba592887a8b8b7b33aa784647f2",
"assets/assets/pngs/icons/3.0x/ic_hide_new.png": "dd7f15a901594c9302fae58632258f8c",
"assets/assets/pngs/icons/3.0x/ic_history.png": "5bf03958d14e854c8e2a155f95be1ce0",
"assets/assets/pngs/icons/3.0x/ic_bank_note.png": "b01e06e4b916777c089794a8b9d0b14f",
"assets/assets/pngs/icons/3.0x/ic_plus.png": "8b4d1f47c11981b4212d4f8806334ec1",
"assets/assets/pngs/icons/3.0x/ic_card.png": "67f03c44600eee9d701b0c8aa4e20599",
"assets/assets/pngs/icons/3.0x/ic_shop_light.png": "740ae8c8dad98570f0af4caf48418c1d",
"assets/assets/pngs/icons/3.0x/ic_arrow_small_right.png": "db9d7947e942e6febf8fcb50cabe3790",
"assets/assets/pngs/icons/3.0x/ic_transaction_overview.png": "53485c347d59f882e472400ea27e3fd8",
"assets/assets/pngs/icons/3.0x/ic_wallet_light.png": "5ee65ab1a536e09e34c69eb177437c67",
"assets/assets/pngs/icons/3.0x/ic_angle_double_small_right.png": "c71228fed2b4c592bff67bb4b8d03dd0",
"assets/assets/pngs/icons/3.0x/ic_setting_active.png": "a53732a8e3a328057279bc1e39c283b2",
"assets/assets/pngs/icons/3.0x/ic_warehouse.png": "6ae41804e2b087be4a4471cf043ce57a",
"assets/assets/pngs/icons/3.0x/ic_critical_light.png": "fb2bbd6063ede6d2faf98fa0fa426d4c",
"assets/assets/pngs/icons/3.0x/ic_filter.png": "e4a39fa57cba3851986aaa67fc8d0147",
"assets/assets/pngs/icons/3.0x/ic_clock.png": "d55ec585412112330f7ee3af369bb74a",
"assets/assets/pngs/icons/3.0x/ic_product_category.png": "166de2bb0ffb8287eb1cbc41f1e9cefb",
"assets/assets/pngs/icons/3.0x/ic_print_light.png": "7557910cb323477b5c755d13ac304a3c",
"assets/assets/pngs/icons/3.0x/ic_delete_field.png": "8a5dcf21721562198dd258f32d22412f",
"assets/assets/pngs/icons/3.0x/ic_logout.png": "4d31f72dc091a1fce3bc18a1fd77b0d0",
"assets/assets/pngs/icons/3.0x/ic_camera_sf.png": "47238347ac81e39b29d1339ba578a26f",
"assets/assets/pngs/icons/3.0x/ic_ticket.png": "9877bc0c6147c4961119639bbbebcb06",
"assets/assets/pngs/icons/3.0x/ic_database_light.png": "669c7ef7d237a8f5ca25a67aae1aa2ed",
"assets/assets/pngs/icons/3.0x/ic_scan_code.png": "31072179000cb1d05c40f0ac611b7f47",
"assets/assets/pngs/icons/3.0x/ic_group_light.png": "b1ec094cfab752e215c3094021129e5d",
"assets/assets/pngs/icons/3.0x/ic_edit.png": "bea7124c5529257e9ed9028c1198f4b3",
"assets/assets/pngs/icons/3.0x/ic_passcode_lock.png": "d7ecccf70685c3b9fc6115b4128c8173",
"assets/assets/pngs/icons/3.0x/ic_box.png": "1ccb11de158300fe6282c717890f4619",
"assets/assets/pngs/icons/3.0x/ic_search.png": "31afdd2cee400bc7d036426ed8e08b78",
"assets/assets/pngs/icons/3.0x/ic_arrow_narrow_left.png": "44cb4d8b77fda0d5b78aa07abf541f56",
"assets/assets/pngs/icons/3.0x/ic_en.png": "090d17b458ea522414a084509f2e108f",
"assets/assets/pngs/icons/3.0x/ic_setting_email.png": "226e107a75740a9f5fe90a2e123b5b92",
"assets/assets/pngs/icons/3.0x/ic_history_sync.png": "1db021f777a338b2adfe180013f32c94",
"assets/assets/pngs/icons/3.0x/ic_back.png": "92c252cd3a36e7fe1d66bb77a1fcf8b0",
"assets/assets/pngs/icons/3.0x/ic_commodity_group.png": "27fdedc290148f4c571bb64003c0e06d",
"assets/assets/pngs/icons/3.0x/bg_login.png": "923ac95b11632630e34e6e8b7685d026",
"assets/assets/pngs/icons/3.0x/ic_history_sync_active.png": "032b15572e38f87f97bc33146be48d08",
"assets/assets/pngs/icons/3.0x/ic_wallet.png": "992d155c3917f1f188355d8f974f679b",
"assets/assets/pngs/icons/3.0x/ic_machine.png": "a0702d9c38268e67634cca6aede8c288",
"assets/assets/pngs/icons/3.0x/ic_inventory_inquiry.png": "8ef37c1c27f9b1411d9ba32e0cdbb43c",
"assets/assets/pngs/icons/3.0x/bg_home.png": "3b0b3641a9c864e275a984125745b907",
"assets/assets/pngs/icons/3.0x/ic_account_avartar.jpg": "b5c0ab57ffb1564a71c3672277f07bdc",
"assets/assets/pngs/icons/3.0x/ic_cccd.png": "197be785b3113fe92d04974292acc3e4",
"assets/assets/pngs/icons/3.0x/ic_eyes_new.png": "8d0c2902cbe601021094e92c16e90cca",
"assets/assets/pngs/icons/3.0x/ic_inventory_physical.png": "2faaa70fe9f8c546ffd9a7345170dedb",
"assets/assets/pngs/icons/3.0x/ic_product.png": "bb9805584f9ffca7a4772b6d71f91f2c",
"assets/assets/pngs/icons/3.0x/ic_magnifying_glass.png": "645f7621e4370370f1cd509cfe5a6933",
"assets/assets/pngs/icons/3.0x/ic_file_dock_search_light.png": "578b370f9babf7b56a2eb8409baae07a",
"assets/assets/pngs/icons/3.0x/ic_order.png": "4245fcb55c18d8903e48d66a04a10a98",
"assets/assets/pngs/icons/3.0x/ic_setting_payment.png": "83eeb3cd1c4934c03f35635d7f9625e1",
"assets/assets/pngs/icons/3.0x/ic_empty_order.png": "1efed73c6c423383534fea8ee9003dd1",
"assets/assets/pngs/icons/3.0x/ic_transfer.png": "331dc0053f192eb3cea701314b6c36b1",
"assets/assets/pngs/icons/3.0x/ic_setting_password.png": "090ae8f1f09436cfc8f2ef15d6654680",
"assets/assets/pngs/icons/3.0x/ic_car.png": "b2ad44122678dd054facf3ca9c7bcf7c",
"assets/assets/pngs/icons/3.0x/ic_vn.png": "65e05e8f041519bb4ee11bc8bd9f705e",
"assets/assets/pngs/icons/ic_setting_active.png": "3b753884a1caab899935e65fd8a53e98",
"assets/assets/pngs/icons/ic_warehouse.png": "a8f2b847fd0c7541708bd1164e3cae05",
"assets/assets/pngs/icons/ic_critical_light.png": "5661b5250f2bfb41f205d2a318e33493",
"assets/assets/pngs/icons/ic_filter.png": "6abb20cb881d066f5b2e31eaa6beb7cc",
"assets/assets/pngs/icons/ic_clock.png": "bfb39d8f874c44934770c8fab4c229ba",
"assets/assets/pngs/icons/ic_product_category.png": "0bad186efc8d6d33b0aab38c83cfd570",
"assets/assets/pngs/icons/ic_print_light.png": "c0163d00deebce27ec08397fe9fcfc2f",
"assets/assets/pngs/icons/ic_delete_field.png": "e55bac0598ef397b6e262ec909a6c15a",
"assets/assets/pngs/icons/ic_logout.png": "5b6a129f0eea441ccebeef5d00bbd885",
"assets/assets/pngs/icons/ic_camera_sf.png": "308ec1a8fc1b70888f9013850533d695",
"assets/assets/pngs/icons/ic_ticket.png": "91c66b605ded3527765dfafa2d8a0b7e",
"assets/assets/pngs/icons/ic_database_light.png": "728f3831e7bca80d3815ad49d1605a4a",
"assets/assets/pngs/icons/ic_scan_code.png": "ba21a83049a3cd5ce89d8bd8e85b7547",
"assets/assets/pngs/icons/ic_group_light.png": "82417bb9e21b7ded9eeb78c512c99148",
"assets/assets/pngs/icons/ic_edit.png": "5df5af89c047f21aac9e5de8ba0cac55",
"assets/assets/pngs/icons/ic_passcode_lock.png": "4aac5e3389d8b670acef296a49c70a22",
"assets/assets/pngs/icons/ic_box.png": "4b99076bf2fce031f7575aad1c7f0f9e",
"assets/assets/pngs/icons/ic_search.png": "d1c93bab438059687cce76a49c00bab1",
"assets/assets/pngs/icons/ic_arrow_narrow_left.png": "b9e00c36ded08568d4be696795aac223",
"assets/assets/pngs/icons/ic_en.png": "e4f481b125cb974e6e21a722f4cce465",
"assets/assets/pngs/icons/ic_setting_email.png": "558fb0c5230eccff18ab0001ebc570c8",
"assets/assets/pngs/icons/ic_history_sync.png": "1f9755d72c91c68c86a118e77cf24bc9",
"assets/assets/pngs/icons/ic_back.png": "ec6f62aa19d6f3d0f3c38a6072876f59",
"assets/assets/pngs/icons/ic_commodity_group.png": "4a05d56a5a1025731480e7d820468d9f",
"assets/assets/pngs/icons/bg_login.png": "b209df378644a753778a9347c15705b9",
"assets/assets/pngs/icons/ic_history_sync_active.png": "1f9a331f295acd40c6f12402c0526c9b",
"assets/assets/pngs/icons/ic_wallet.png": "b2764f04fb75f781ad7cefa7349a7c47",
"assets/assets/pngs/icons/ic_machine.png": "f0cddc9f5af8762a8393323eba987753",
"assets/assets/pngs/icons/ic_inventory_inquiry.png": "cfac1533425f8a7ccba49a27ecca2293",
"assets/assets/pngs/icons/bg_home.png": "d3986ee0332aa091fa8ae37c6192c006",
"assets/assets/pngs/icons/ic_account_avartar.jpg": "b5c0ab57ffb1564a71c3672277f07bdc",
"assets/assets/pngs/icons/ic_cccd.png": "1939f4697d0c6c1f738a2425213bde9b",
"assets/assets/pngs/icons/ic_eyes_new.png": "640a5c290dc106c872d818fd52024167",
"assets/assets/pngs/icons/ic_inventory_physical.png": "1380d6208c6217da985fb6a80b92d242",
"assets/assets/pngs/icons/ic_product.png": "43af03dfcdbcc4b74da43e2ae27c6fa1",
"assets/assets/pngs/icons/ic_magnifying_glass.png": "a07bebac018fa96592843d00d20d8e9f",
"assets/assets/pngs/icons/ic_file_dock_search_light.png": "6101b55fd31c4d5a5f3ca793d1e3c04b",
"assets/assets/pngs/icons/ic_order.png": "e2a9f44d74fcee017e2d1591bbf68c83",
"assets/assets/pngs/icons/ic_setting_payment.png": "5403d83416e66b0d36e853e235dfbb28",
"assets/assets/pngs/icons/ic_empty_order.png": "1fee5d68f659ff8ed4237352fe2b8b81",
"assets/assets/pngs/icons/ic_transfer.png": "fce7e6d54f3e33f3f7f22e9d9fd7022c",
"assets/assets/pngs/icons/ic_setting_password.png": "ba4492a12c8958619d6e74654b59a432",
"assets/assets/pngs/icons/ic_car.png": "9d030c8752d24b58a3ae055dbe8c4ff9",
"assets/assets/pngs/icons/ic_vn.png": "ae3313adff031bed7efb2139fb18eede",
"assets/assets/fonts/PlusJakartaSans-Light.ttf": "d6fb190614a9297c6263f85094463592",
"assets/assets/fonts/PlusJakartaSans-Medium.ttf": "9fb6d71fc9edf9db455adeb04da9795c",
"assets/assets/fonts/PlusJakartaSans-SemiBold.ttf": "08d59825aa09f741c9272b85e6a1adbf",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "f539ae4a8884822210a4553cc88ca3dc",
"assets/assets/fonts/PlusJakartaSans-Bold.ttf": "7dae244963714ee2b16fcbab46661792",
"assets/assets/translations/en.json": "aa1d1f7cf980af149650a5c776459717",
"assets/assets/translations/vi.json": "44dd6b7019606d6218f3beecfb49dce5",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

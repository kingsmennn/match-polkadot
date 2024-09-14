export const marketAbi = {
  source: {
    hash: "0x8377a4d834aa01ae61266b7faee0743296a25ca4c5ee25dc0388ac30aed1871c",
    language: "ink! 5.0.0",
    compiler: "rustc 1.81.0",
    build_info: {
      build_mode: "Release",
      cargo_contract_version: "4.1.1",
      rust_toolchain: "stable-aarch64-apple-darwin",
      wasm_opt_settings: {
        keep_debug_symbols: false,
        optimization_passes: "Z",
      },
    },
  },
  contract: {
    name: "marketplace",
    version: "0.1.0",
    authors: ["[your_name] <[your_email]>"],
  },
  image: null,
  spec: {
    constructors: [
      {
        args: [],
        default: false,
        docs: [],
        label: "new",
        payable: false,
        returnType: {
          displayName: ["ink_primitives", "ConstructorResult"],
          type: 43,
        },
        selector: "0x9bae9d5e",
      },
    ],
    docs: [],
    environment: {
      accountId: {
        displayName: ["AccountId"],
        type: 3,
      },
      balance: {
        displayName: ["Balance"],
        type: 61,
      },
      blockNumber: {
        displayName: ["BlockNumber"],
        type: 63,
      },
      chainExtension: {
        displayName: ["ChainExtension"],
        type: 64,
      },
      hash: {
        displayName: ["Hash"],
        type: 62,
      },
      maxEventTopics: 4,
      staticBufferSize: 16384,
      timestamp: {
        displayName: ["Timestamp"],
        type: 0,
      },
    },
    events: [
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "user_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "user_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "username",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "account_type",
            type: {
              displayName: ["u8"],
              type: 5,
            },
          },
        ],
        docs: [],
        label: "UserCreated",
        module_path: "marketplace::marketplace",
        signature_topic:
          "0xfabcc28b49e838686b48e8e6c1ec0ee298319aa9d452cee15656a406491497d3",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "user_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "user_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "username",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "account_type",
            type: {
              displayName: ["u8"],
              type: 5,
            },
          },
        ],
        docs: [],
        label: "UserUpdated",
        module_path: "marketplace::marketplace",
        signature_topic:
          "0x29c9236832ae3d3d319349785df5c43af30b68ef4c02998d6344680a0a6efdbb",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "seller_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "store_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "store_name",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "latitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "longitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
        ],
        docs: [],
        label: "StoreCreated",
        module_path: "marketplace::marketplace",
        signature_topic:
          "0xf5a304333450e2f181d39f6d7617ce718ce3e60412971d1789e58086d264bd49",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "request_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: "buyer_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "removed_at",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
        ],
        docs: [],
        label: "RequestRemoved",
        module_path: "marketplace::marketplace",
        signature_topic:
          "0xcc6b8263c8e313db70d53b591c2e4573adb35870385523b2ab76280e9253a455",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "offer_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: "buyer_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "is_accepted",
            type: {
              displayName: ["bool"],
              type: 22,
            },
          },
        ],
        docs: [],
        label: "OfferAccepted",
        module_path: "marketplace::marketplace",
        signature_topic:
          "0xd15083fda73109fb3ff0eb9d0c204d4d98d04e23bc578b0c4e923829dd1e8ac5",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "request_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: "buyer_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "request_name",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "latitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "longitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "images",
            type: {
              displayName: ["Vec"],
              type: 16,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "lifecycle",
            type: {
              displayName: ["u8"],
              type: 5,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "description",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "buyer_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "seller_ids",
            type: {
              displayName: ["Vec"],
              type: 15,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "sellers_price_quote",
            type: {
              displayName: ["i64"],
              type: 14,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "locked_seller_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "created_at",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "updated_at",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
        ],
        docs: [],
        label: "RequestCreated",
        module_path: "marketplace::marketplace",
        signature_topic:
          "0x1e0060052ecc86dcd083d8022f2d455bf8accd1709ad910e6553c6ea4aecbf9f",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "offer_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: "seller_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "store_name",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "price",
            type: {
              displayName: ["i64"],
              type: 14,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "request_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "images",
            type: {
              displayName: ["Vec"],
              type: 16,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "seller_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "seller_ids",
            type: {
              displayName: ["Vec"],
              type: 15,
            },
          },
        ],
        docs: [],
        label: "OfferCreated",
        module_path: "marketplace::marketplace",
        signature_topic:
          "0x09c4a55570d706f1b17be7d1c5b9420be896537335bc63e93e854e104afa8741",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "request_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: "offer_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: "seller_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "updated_at",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "sellers_price_quote",
            type: {
              displayName: ["i64"],
              type: 14,
            },
          },
        ],
        docs: [],
        label: "RequestAccepted",
        module_path: "marketplace::marketplace",
        signature_topic:
          "0x12770f9d7c047d0fd5f378de975b9407a260f3907cb765db19cf7abe597a58f8",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "authority",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "location_enabled",
            type: {
              displayName: ["bool"],
              type: 22,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "user_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "created_at",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "updated_at",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
        ],
        docs: [],
        label: "LocationEnabled",
        module_path: "marketplace::marketplace",
        signature_topic:
          "0x04c04ef80d3b2f1e97a1e1f9f83af168a32f771867a2b52c13160e058d1d3004",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "offer_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: "seller_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
        ],
        docs: [],
        label: "OfferRemoved",
        module_path: "marketplace::marketplace",
        signature_topic:
          "0x63445a6d76a7e738c8b36915ccdd8f72e69cff8d1fd9e8260a72e60b55ecbe0e",
      },
    ],
    lang_error: {
      displayName: ["ink", "LangError"],
      type: 44,
    },
    messages: [
      {
        args: [
          {
            label: "username",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            label: "phone",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            label: "latitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
          {
            label: "longitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
          {
            label: "account_type",
            type: {
              displayName: ["AccountType"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "create_user",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 45,
        },
        selector: "0xf617bfd8",
      },
      {
        args: [
          {
            label: "username",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            label: "phone",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            label: "latitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
          {
            label: "longitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
          {
            label: "account_type",
            type: {
              displayName: ["AccountType"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "update_user",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 45,
        },
        selector: "0x50d56931",
      },
      {
        args: [
          {
            label: "name",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            label: "description",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            label: "phone",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            label: "latitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
          {
            label: "longitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
        ],
        default: false,
        docs: [],
        label: "create_store",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 45,
        },
        selector: "0xfd41fc6e",
      },
      {
        args: [
          {
            label: "name",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            label: "description",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
          {
            label: "images",
            type: {
              displayName: ["Vec"],
              type: 16,
            },
          },
          {
            label: "latitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
          {
            label: "longitude",
            type: {
              displayName: ["i128"],
              type: 2,
            },
          },
        ],
        default: false,
        docs: [],
        label: "create_request",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 45,
        },
        selector: "0xa90550ab",
      },
      {
        args: [
          {
            label: "enabled",
            type: {
              displayName: ["bool"],
              type: 22,
            },
          },
        ],
        default: false,
        docs: [],
        label: "toggle_location",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 45,
        },
        selector: "0x629c4176",
      },
      {
        args: [],
        default: false,
        docs: [],
        label: "get_location_preference",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 48,
        },
        selector: "0x8dad227f",
      },
      {
        args: [
          {
            label: "request_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
        ],
        default: false,
        docs: [],
        label: "delete_request",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 45,
        },
        selector: "0x5230f52c",
      },
      {
        args: [
          {
            label: "request_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
          {
            label: "price",
            type: {
              displayName: ["i64"],
              type: 14,
            },
          },
          {
            label: "images",
            type: {
              displayName: ["Vec"],
              type: 16,
            },
          },
          {
            label: "store_name",
            type: {
              displayName: ["String"],
              type: 1,
            },
          },
        ],
        default: false,
        docs: [],
        label: "create_offer",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 45,
        },
        selector: "0x7f170b70",
      },
      {
        args: [
          {
            label: "offer_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
        ],
        default: false,
        docs: [],
        label: "accept_offer",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 45,
        },
        selector: "0x00cf33d5",
      },
      {
        args: [
          {
            label: "request_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
        ],
        default: false,
        docs: [],
        label: "mark_request_as_completed",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 45,
        },
        selector: "0xf2f556ad",
      },
      {
        args: [
          {
            label: "user_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
        ],
        default: false,
        docs: [],
        label: "get_user",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 49,
        },
        selector: "0xa4ca534e",
      },
      {
        args: [
          {
            label: "request_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
        ],
        default: false,
        docs: [],
        label: "get_request",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 51,
        },
        selector: "0x77ba7f13",
      },
      {
        args: [
          {
            label: "offer_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
        ],
        default: false,
        docs: [],
        label: "get_offer",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 53,
        },
        selector: "0xdd4e4ee2",
      },
      {
        args: [
          {
            label: "request_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
        ],
        default: false,
        docs: [],
        label: "get_offer_by_request",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 55,
        },
        selector: "0xbbd2cc92",
      },
      {
        args: [
          {
            label: "user_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
        ],
        default: false,
        docs: [],
        label: "get_user_requests",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 57,
        },
        selector: "0xe477ff0a",
      },
      {
        args: [],
        default: false,
        docs: [],
        label: "get_all_requests",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 57,
        },
        selector: "0x46ab9868",
      },
      {
        args: [
          {
            label: "user_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
        ],
        default: false,
        docs: [],
        label: "get_user_stores",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 59,
        },
        selector: "0x1963b666",
      },
      {
        args: [
          {
            label: "user_id",
            type: {
              displayName: ["u64"],
              type: 0,
            },
          },
        ],
        default: false,
        docs: [],
        label: "get_user_by_id",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 49,
        },
        selector: "0xa50a269c",
      },
      {
        args: [
          {
            label: "seller_address",
            type: {
              displayName: ["AccountId"],
              type: 3,
            },
          },
        ],
        default: false,
        docs: [],
        label: "get_seller_offers",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 55,
        },
        selector: "0x985ff606",
      },
    ],
  },
  storage: {
    root: {
      layout: {
        struct: {
          fields: [
            {
              layout: {
                root: {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            leaf: {
                              key: "0x60a82dc1",
                              ty: 0,
                            },
                          },
                          name: "id",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x60a82dc1",
                              ty: 1,
                            },
                          },
                          name: "username",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x60a82dc1",
                              ty: 1,
                            },
                          },
                          name: "phone",
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x60a82dc1",
                                      ty: 2,
                                    },
                                  },
                                  name: "latitude",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x60a82dc1",
                                      ty: 2,
                                    },
                                  },
                                  name: "longitude",
                                },
                              ],
                              name: "Location",
                            },
                          },
                          name: "location",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x60a82dc1",
                              ty: 0,
                            },
                          },
                          name: "created_at",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x60a82dc1",
                              ty: 0,
                            },
                          },
                          name: "updated_at",
                        },
                        {
                          layout: {
                            enum: {
                              dispatchKey: "0x60a82dc1",
                              name: "AccountType",
                              variants: {
                                "0": {
                                  fields: [],
                                  name: "Buyer",
                                },
                                "1": {
                                  fields: [],
                                  name: "Seller",
                                },
                              },
                            },
                          },
                          name: "account_type",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x60a82dc1",
                              ty: 3,
                            },
                          },
                          name: "authority",
                        },
                      ],
                      name: "User",
                    },
                  },
                  root_key: "0x60a82dc1",
                  ty: 6,
                },
              },
              name: "users",
            },
            {
              layout: {
                root: {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            leaf: {
                              key: "0x64f26593",
                              ty: 0,
                            },
                          },
                          name: "id",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x64f26593",
                              ty: 1,
                            },
                          },
                          name: "name",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x64f26593",
                              ty: 0,
                            },
                          },
                          name: "buyer_id",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x64f26593",
                              ty: 14,
                            },
                          },
                          name: "sellers_price_quote",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x64f26593",
                              ty: 15,
                            },
                          },
                          name: "seller_ids",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x64f26593",
                              ty: 15,
                            },
                          },
                          name: "offer_ids",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x64f26593",
                              ty: 0,
                            },
                          },
                          name: "locked_seller_id",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x64f26593",
                              ty: 1,
                            },
                          },
                          name: "description",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x64f26593",
                              ty: 16,
                            },
                          },
                          name: "images",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x64f26593",
                              ty: 0,
                            },
                          },
                          name: "created_at",
                        },
                        {
                          layout: {
                            enum: {
                              dispatchKey: "0x64f26593",
                              name: "RequestLifecycle",
                              variants: {
                                "0": {
                                  fields: [],
                                  name: "Pending",
                                },
                                "1": {
                                  fields: [],
                                  name: "AcceptedBySeller",
                                },
                                "2": {
                                  fields: [],
                                  name: "AcceptedByBuyer",
                                },
                                "3": {
                                  fields: [],
                                  name: "RequestLocked",
                                },
                                "4": {
                                  fields: [],
                                  name: "Completed",
                                },
                              },
                            },
                          },
                          name: "lifecycle",
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x64f26593",
                                      ty: 2,
                                    },
                                  },
                                  name: "latitude",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x64f26593",
                                      ty: 2,
                                    },
                                  },
                                  name: "longitude",
                                },
                              ],
                              name: "Location",
                            },
                          },
                          name: "location",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x64f26593",
                              ty: 0,
                            },
                          },
                          name: "updated_at",
                        },
                      ],
                      name: "Request",
                    },
                  },
                  root_key: "0x64f26593",
                  ty: 17,
                },
              },
              name: "requests",
            },
            {
              layout: {
                root: {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            leaf: {
                              key: "0x295e23a0",
                              ty: 0,
                            },
                          },
                          name: "user_id",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x295e23a0",
                              ty: 3,
                            },
                          },
                          name: "authority",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x295e23a0",
                              ty: 22,
                            },
                          },
                          name: "location_enabled",
                        },
                      ],
                      name: "EnableLocation",
                    },
                  },
                  root_key: "0x295e23a0",
                  ty: 23,
                },
              },
              name: "location",
            },
            {
              layout: {
                root: {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            leaf: {
                              key: "0xbfd58179",
                              ty: 0,
                            },
                          },
                          name: "id",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xbfd58179",
                              ty: 14,
                            },
                          },
                          name: "price",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xbfd58179",
                              ty: 16,
                            },
                          },
                          name: "images",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xbfd58179",
                              ty: 0,
                            },
                          },
                          name: "request_id",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xbfd58179",
                              ty: 1,
                            },
                          },
                          name: "store_name",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xbfd58179",
                              ty: 0,
                            },
                          },
                          name: "seller_id",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xbfd58179",
                              ty: 22,
                            },
                          },
                          name: "is_accepted",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xbfd58179",
                              ty: 0,
                            },
                          },
                          name: "created_at",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xbfd58179",
                              ty: 0,
                            },
                          },
                          name: "updated_at",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xbfd58179",
                              ty: 3,
                            },
                          },
                          name: "authority",
                        },
                      ],
                      name: "Offer",
                    },
                  },
                  root_key: "0xbfd58179",
                  ty: 27,
                },
              },
              name: "offers",
            },
            {
              layout: {
                root: {
                  layout: {
                    leaf: {
                      key: "0x6376d398",
                      ty: 15,
                    },
                  },
                  root_key: "0x6376d398",
                  ty: 31,
                },
              },
              name: "user_store_ids",
            },
            {
              layout: {
                root: {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            leaf: {
                              key: "0xe041d6cc",
                              ty: 0,
                            },
                          },
                          name: "id",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xe041d6cc",
                              ty: 1,
                            },
                          },
                          name: "name",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xe041d6cc",
                              ty: 1,
                            },
                          },
                          name: "description",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0xe041d6cc",
                              ty: 1,
                            },
                          },
                          name: "phone",
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    leaf: {
                                      key: "0xe041d6cc",
                                      ty: 2,
                                    },
                                  },
                                  name: "latitude",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0xe041d6cc",
                                      ty: 2,
                                    },
                                  },
                                  name: "longitude",
                                },
                              ],
                              name: "Location",
                            },
                          },
                          name: "location",
                        },
                      ],
                      name: "Store",
                    },
                  },
                  root_key: "0xe041d6cc",
                  ty: 34,
                },
              },
              name: "user_stores",
            },
            {
              layout: {
                leaf: {
                  key: "0x00000000",
                  ty: 0,
                },
              },
              name: "user_counter",
            },
            {
              layout: {
                leaf: {
                  key: "0x00000000",
                  ty: 0,
                },
              },
              name: "store_counter",
            },
            {
              layout: {
                leaf: {
                  key: "0x00000000",
                  ty: 0,
                },
              },
              name: "request_counter",
            },
            {
              layout: {
                leaf: {
                  key: "0x00000000",
                  ty: 0,
                },
              },
              name: "offer_counter",
            },
            {
              layout: {
                leaf: {
                  key: "0x00000000",
                  ty: 0,
                },
              },
              name: "TIME_TO_LOCK",
            },
            {
              layout: {
                root: {
                  layout: {
                    leaf: {
                      key: "0x6e95f687",
                      ty: 3,
                    },
                  },
                  root_key: "0x6e95f687",
                  ty: 39,
                },
              },
              name: "user_ids",
            },
          ],
          name: "Marketplace",
        },
      },
      root_key: "0x00000000",
      ty: 42,
    },
  },
  types: [
    {
      id: 0,
      type: {
        def: {
          primitive: "u64",
        },
      },
    },
    {
      id: 1,
      type: {
        def: {
          primitive: "str",
        },
      },
    },
    {
      id: 2,
      type: {
        def: {
          primitive: "i128",
        },
      },
    },
    {
      id: 3,
      type: {
        def: {
          composite: {
            fields: [
              {
                type: 4,
                typeName: "[u8; 32]",
              },
            ],
          },
        },
        path: ["ink_primitives", "types", "AccountId"],
      },
    },
    {
      id: 4,
      type: {
        def: {
          array: {
            len: 32,
            type: 5,
          },
        },
      },
    },
    {
      id: 5,
      type: {
        def: {
          primitive: "u8",
        },
      },
    },
    {
      id: 6,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "K",
            type: 3,
          },
          {
            name: "V",
            type: 7,
          },
          {
            name: "KeyType",
            type: 10,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 7,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "id",
                type: 0,
                typeName: "u64",
              },
              {
                name: "username",
                type: 1,
                typeName: "String",
              },
              {
                name: "phone",
                type: 1,
                typeName: "String",
              },
              {
                name: "location",
                type: 8,
                typeName: "Location",
              },
              {
                name: "created_at",
                type: 0,
                typeName: "u64",
              },
              {
                name: "updated_at",
                type: 0,
                typeName: "u64",
              },
              {
                name: "account_type",
                type: 9,
                typeName: "AccountType",
              },
              {
                name: "authority",
                type: 3,
                typeName: "AccountId",
              },
            ],
          },
        },
        path: ["marketplace", "marketplace", "User"],
      },
    },
    {
      id: 8,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "latitude",
                type: 2,
                typeName: "i128",
              },
              {
                name: "longitude",
                type: 2,
                typeName: "i128",
              },
            ],
          },
        },
        path: ["marketplace", "marketplace", "Location"],
      },
    },
    {
      id: 9,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: "Buyer",
              },
              {
                index: 1,
                name: "Seller",
              },
            ],
          },
        },
        path: ["marketplace", "marketplace", "AccountType"],
      },
    },
    {
      id: 10,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 11,
          },
          {
            name: "R",
            type: 12,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 11,
      type: {
        def: {
          composite: {},
        },
        path: ["ink_storage_traits", "impls", "AutoKey"],
      },
    },
    {
      id: 12,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 13,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 13,
      type: {
        def: {
          tuple: [],
        },
      },
    },
    {
      id: 14,
      type: {
        def: {
          primitive: "i64",
        },
      },
    },
    {
      id: 15,
      type: {
        def: {
          sequence: {
            type: 0,
          },
        },
      },
    },
    {
      id: 16,
      type: {
        def: {
          sequence: {
            type: 1,
          },
        },
      },
    },
    {
      id: 17,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "K",
            type: 0,
          },
          {
            name: "V",
            type: 18,
          },
          {
            name: "KeyType",
            type: 20,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 18,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "id",
                type: 0,
                typeName: "u64",
              },
              {
                name: "name",
                type: 1,
                typeName: "String",
              },
              {
                name: "buyer_id",
                type: 0,
                typeName: "u64",
              },
              {
                name: "sellers_price_quote",
                type: 14,
                typeName: "i64",
              },
              {
                name: "seller_ids",
                type: 15,
                typeName: "Vec<u64>",
              },
              {
                name: "offer_ids",
                type: 15,
                typeName: "Vec<u64>",
              },
              {
                name: "locked_seller_id",
                type: 0,
                typeName: "u64",
              },
              {
                name: "description",
                type: 1,
                typeName: "String",
              },
              {
                name: "images",
                type: 16,
                typeName: "Vec<String>",
              },
              {
                name: "created_at",
                type: 0,
                typeName: "u64",
              },
              {
                name: "lifecycle",
                type: 19,
                typeName: "RequestLifecycle",
              },
              {
                name: "location",
                type: 8,
                typeName: "Location",
              },
              {
                name: "updated_at",
                type: 0,
                typeName: "u64",
              },
            ],
          },
        },
        path: ["marketplace", "marketplace", "Request"],
      },
    },
    {
      id: 19,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: "Pending",
              },
              {
                index: 1,
                name: "AcceptedBySeller",
              },
              {
                index: 2,
                name: "AcceptedByBuyer",
              },
              {
                index: 3,
                name: "RequestLocked",
              },
              {
                index: 4,
                name: "Completed",
              },
            ],
          },
        },
        path: ["marketplace", "marketplace", "RequestLifecycle"],
      },
    },
    {
      id: 20,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 11,
          },
          {
            name: "R",
            type: 21,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 21,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 13,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 22,
      type: {
        def: {
          primitive: "bool",
        },
      },
    },
    {
      id: 23,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "K",
            type: 3,
          },
          {
            name: "V",
            type: 24,
          },
          {
            name: "KeyType",
            type: 25,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 24,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "user_id",
                type: 0,
                typeName: "u64",
              },
              {
                name: "authority",
                type: 3,
                typeName: "AccountId",
              },
              {
                name: "location_enabled",
                type: 22,
                typeName: "bool",
              },
            ],
          },
        },
        path: ["marketplace", "marketplace", "EnableLocation"],
      },
    },
    {
      id: 25,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 11,
          },
          {
            name: "R",
            type: 26,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 26,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 13,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 27,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "K",
            type: 0,
          },
          {
            name: "V",
            type: 28,
          },
          {
            name: "KeyType",
            type: 29,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 28,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "id",
                type: 0,
                typeName: "u64",
              },
              {
                name: "price",
                type: 14,
                typeName: "i64",
              },
              {
                name: "images",
                type: 16,
                typeName: "Vec<String>",
              },
              {
                name: "request_id",
                type: 0,
                typeName: "u64",
              },
              {
                name: "store_name",
                type: 1,
                typeName: "String",
              },
              {
                name: "seller_id",
                type: 0,
                typeName: "u64",
              },
              {
                name: "is_accepted",
                type: 22,
                typeName: "bool",
              },
              {
                name: "created_at",
                type: 0,
                typeName: "u64",
              },
              {
                name: "updated_at",
                type: 0,
                typeName: "u64",
              },
              {
                name: "authority",
                type: 3,
                typeName: "AccountId",
              },
            ],
          },
        },
        path: ["marketplace", "marketplace", "Offer"],
      },
    },
    {
      id: 29,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 11,
          },
          {
            name: "R",
            type: 30,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 30,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 13,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 31,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "K",
            type: 3,
          },
          {
            name: "V",
            type: 15,
          },
          {
            name: "KeyType",
            type: 32,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 32,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 11,
          },
          {
            name: "R",
            type: 33,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 33,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 13,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 34,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "K",
            type: 35,
          },
          {
            name: "V",
            type: 36,
          },
          {
            name: "KeyType",
            type: 37,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 35,
      type: {
        def: {
          tuple: [3, 0],
        },
      },
    },
    {
      id: 36,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "id",
                type: 0,
                typeName: "u64",
              },
              {
                name: "name",
                type: 1,
                typeName: "String",
              },
              {
                name: "description",
                type: 1,
                typeName: "String",
              },
              {
                name: "phone",
                type: 1,
                typeName: "String",
              },
              {
                name: "location",
                type: 8,
                typeName: "Location",
              },
            ],
          },
        },
        path: ["marketplace", "marketplace", "Store"],
      },
    },
    {
      id: 37,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 11,
          },
          {
            name: "R",
            type: 38,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 38,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 13,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 39,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "K",
            type: 0,
          },
          {
            name: "V",
            type: 3,
          },
          {
            name: "KeyType",
            type: 40,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 40,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 11,
          },
          {
            name: "R",
            type: 41,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 41,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 13,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 42,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "users",
                type: 6,
                typeName:
                  "<Mapping<AccountId, User> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<3240994912u32,\n()>,>>::Type",
              },
              {
                name: "requests",
                type: 17,
                typeName:
                  "<Mapping<u64, Request> as::ink::storage::traits::AutoStorableHint\n<::ink::storage::traits::ManualKey<2472931940u32, ()>,>>::Type",
              },
              {
                name: "location",
                type: 23,
                typeName:
                  "<Mapping<AccountId, EnableLocation> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<2686672425u32,\n()>,>>::Type",
              },
              {
                name: "offers",
                type: 27,
                typeName:
                  "<Mapping<u64, Offer> as::ink::storage::traits::AutoStorableHint<\n::ink::storage::traits::ManualKey<2038551999u32, ()>,>>::Type",
              },
              {
                name: "user_store_ids",
                type: 31,
                typeName:
                  "<Mapping<AccountId, Vec<u64>> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<2563995235u32,\n()>,>>::Type",
              },
              {
                name: "user_stores",
                type: 34,
                typeName:
                  "<Mapping<(AccountId, u64), Store> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<3436593632u32,\n()>,>>::Type",
              },
              {
                name: "user_counter",
                type: 0,
                typeName:
                  "<u64 as::ink::storage::traits::AutoStorableHint<::ink::storage\n::traits::ManualKey<3084407659u32, ()>,>>::Type",
              },
              {
                name: "store_counter",
                type: 0,
                typeName:
                  "<u64 as::ink::storage::traits::AutoStorableHint<::ink::storage\n::traits::ManualKey<3139334955u32, ()>,>>::Type",
              },
              {
                name: "request_counter",
                type: 0,
                typeName:
                  "<u64 as::ink::storage::traits::AutoStorableHint<::ink::storage\n::traits::ManualKey<363523585u32, ()>,>>::Type",
              },
              {
                name: "offer_counter",
                type: 0,
                typeName:
                  "<u64 as::ink::storage::traits::AutoStorableHint<::ink::storage\n::traits::ManualKey<3665479668u32, ()>,>>::Type",
              },
              {
                name: "TIME_TO_LOCK",
                type: 0,
                typeName:
                  "<u64 as::ink::storage::traits::AutoStorableHint<::ink::storage\n::traits::ManualKey<1727207882u32, ()>,>>::Type",
              },
              {
                name: "user_ids",
                type: 39,
                typeName:
                  "<Mapping<u64, AccountId> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<2281084270u32,\n()>,>>::Type",
              },
            ],
          },
        },
        path: ["marketplace", "marketplace", "Marketplace"],
      },
    },
    {
      id: 43,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 13,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 44,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 13,
          },
          {
            name: "E",
            type: 44,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 44,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 1,
                name: "CouldNotReadInput",
              },
            ],
          },
        },
        path: ["ink_primitives", "LangError"],
      },
    },
    {
      id: 45,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 46,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 44,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 46,
          },
          {
            name: "E",
            type: 44,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 46,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 13,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 47,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 13,
          },
          {
            name: "E",
            type: 47,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 47,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: "UserAlreadyExists",
              },
              {
                index: 1,
                name: "InvalidUser",
              },
              {
                index: 2,
                name: "OnlySellersAllowed",
              },
              {
                index: 3,
                name: "OnlyBuyersAllowed",
              },
              {
                index: 4,
                name: "InvalidRequest",
              },
              {
                index: 5,
                name: "InvalidOffer",
              },
              {
                index: 6,
                name: "RequestLocked",
              },
              {
                index: 7,
                name: "UnauthorizedBuyer",
              },
              {
                index: 8,
                name: "OfferAlreadyAccepted",
              },
              {
                index: 9,
                name: "RequestNotAccepted",
              },
              {
                index: 10,
                name: "RequestNotLocked",
              },
            ],
          },
        },
        path: ["marketplace", "marketplace", "MarketplaceError"],
      },
    },
    {
      id: 48,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 22,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 44,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 22,
          },
          {
            name: "E",
            type: 44,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 49,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 50,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 44,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 50,
          },
          {
            name: "E",
            type: 44,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 50,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: "None",
              },
              {
                fields: [
                  {
                    type: 7,
                  },
                ],
                index: 1,
                name: "Some",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 7,
          },
        ],
        path: ["Option"],
      },
    },
    {
      id: 51,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 52,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 44,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 52,
          },
          {
            name: "E",
            type: 44,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 52,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: "None",
              },
              {
                fields: [
                  {
                    type: 18,
                  },
                ],
                index: 1,
                name: "Some",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 18,
          },
        ],
        path: ["Option"],
      },
    },
    {
      id: 53,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 54,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 44,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 54,
          },
          {
            name: "E",
            type: 44,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 54,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: "None",
              },
              {
                fields: [
                  {
                    type: 28,
                  },
                ],
                index: 1,
                name: "Some",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 28,
          },
        ],
        path: ["Option"],
      },
    },
    {
      id: 55,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 56,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 44,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 56,
          },
          {
            name: "E",
            type: 44,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 56,
      type: {
        def: {
          sequence: {
            type: 28,
          },
        },
      },
    },
    {
      id: 57,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 58,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 44,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 58,
          },
          {
            name: "E",
            type: 44,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 58,
      type: {
        def: {
          sequence: {
            type: 18,
          },
        },
      },
    },
    {
      id: 59,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 60,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 44,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 60,
          },
          {
            name: "E",
            type: 44,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 60,
      type: {
        def: {
          sequence: {
            type: 36,
          },
        },
      },
    },
    {
      id: 61,
      type: {
        def: {
          primitive: "u128",
        },
      },
    },
    {
      id: 62,
      type: {
        def: {
          composite: {
            fields: [
              {
                type: 4,
                typeName: "[u8; 32]",
              },
            ],
          },
        },
        path: ["ink_primitives", "types", "Hash"],
      },
    },
    {
      id: 63,
      type: {
        def: {
          primitive: "u32",
        },
      },
    },
    {
      id: 64,
      type: {
        def: {
          variant: {},
        },
        path: ["ink_env", "types", "NoChainExtension"],
      },
    },
  ],
  version: 5,
};

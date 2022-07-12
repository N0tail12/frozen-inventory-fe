export const columns = [
  { slots: { title: "no_" }, key: "no", scopedSlots: { customRender: "no" }, align: "center", width: "5%" },
  {
    slots: { title: "stock_name" },
    key: "stock_name",
    scopedSlots: { customRender: "stock_name" },
    align: "left"
  },
  {
    slots: { title: "stock_code" },
    key: "stock_code",
    scopedSlots: { customRender: "stock_code" },
    align: "left"
  },
  {
    slots: { title: "stock_price" },
    key: "stock_price",
    scopedSlots: { customRender: "stock_price" },
    align: "left"
  },
  {
    slots: { title: "stock_lot_number" },
    key: "stock_lot_number",
    scopedSlots: { customRender: "stock_lot_number" },
    align: "left"
  },
  {
    slots: { title: "manufacture_date" },
    key: "manufacture_date",
    scopedSlots: { customRender: "manufacture_date" },
    align: "left"
  },
  {
    slots: { title: "expiration_date" },
    key: "expiration_date",
    scopedSlots: { customRender: "expiration_date" },
    align: "left"
  },
  {
    slots: { title: "category_name" },
    key: "category_name",
    scopedSlots: { customRender: "category_name" },
    align: "left"
  },
  {
    slots: { title: "action" },
    key: "action",
    dataIndex: "id",
    scopedSlots: { customRender: "action" },
    width: "5%",
    defaultChecked: true
  }
];

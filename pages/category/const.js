export const columns = [
  { slots: { title: "no_" }, key: "no", scopedSlots: { customRender: "no" }, align: "center", width: "5%" },
  {
    slots: { title: "category_name" },
    key: "category_name",
    scopedSlots: { customRender: "category_name" },
    align: "right"
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

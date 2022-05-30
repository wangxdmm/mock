const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const koaBody = require("koa-body");

app.use(koaBody());
const material = (p = "") => {
  return `/material/eo/component${p}`;
};

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

router.post(material(), async (ctx) => {
  ctx.response.body = ctx.request.body;
});

router.put(material(), async (ctx) => {
  ctx.response.body = ctx.request.body;
});

router.delete(material('/:id'), async (ctx) => {
  ctx.response.body = ctx.params.id;
});

router.get(material("/all"), async (ctx) => {
  ctx.response.body = [
    {
      code: "el-button",
      name: "button",
      desc: "desc",
      properties: [
        {
          key: "size",
          displayName: "尺寸",
          desc: "描述尺寸",
          group: [],
          type: "STRING",
          defaultValue: "small",
          required: true,
          editable: true,
          visible: true,
        },
        {
          key: "size2",
          displayName: "尺寸",
          desc: "描述尺寸",
          group: [],
          type: "STRING",
          defaultValue: "small",
          required: true,
          editable: true,
          visible: true,
        },
      ],
      scope: {
        noLimit: true,
        inPage: true,
        parentComponents: [],
      },
      autoConfig: [
        {
          containerType: "COMPONENT",
          componentCode: "111",
          properties: [],
        },
      ],
      triggers: [
        {
          key: "click",
          name: "",
          desc: "",
        },
      ],
      actions: [
        {
          key: "onClick",
          name: "",
          desc: "",
        },
      ],
    },
    {
      code: "el-border",
      name: "border",
      desc: "desc",
      properties: [
        {
          key: "size-border",
          displayName: "尺寸",
          desc: "描述尺寸",
          group: [],
          type: "STRING",
          defaultValue: "small",
          required: true,
          editable: true,
          visible: true,
        },
        {
          key: "border2",
          displayName: "尺寸",
          desc: "描述尺寸",
          group: [],
          type: "STRING",
          defaultValue: "small",
          required: true,
          editable: true,
          visible: true,
        },
      ],
      scope: {
        noLimit: true,
        inPage: true,
        parentComponents: [],
      },
      autoConfig: [
        {
          containerType: "COMPONENT",
          componentCode: "111",
          properties: [],
        },
      ],
      triggers: [
        {
          key: "click",
          name: "",
          desc: "",
        },
      ],
      actions: [
        {
          key: "onClick",
          name: "",
          desc: "",
        },
      ],
    },
  ];
});

app.use(router.routes());

app.listen(3002);

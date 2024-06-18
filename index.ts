import swagger from '@elysiajs/swagger'
import { Elysia, t } from 'elysia'

new Elysia()
.use(swagger())
    .get('/:name', ({params}) => `Hello ${params.name}`, {
      params: t.Object({
          name: t.String({
            // default: 'world'
          })
      })
  })
    .listen(3000)
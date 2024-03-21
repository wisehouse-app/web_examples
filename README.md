# Wise House examples

- [Documentation in English](#in-english)
- [Documentación en Español](#en-español)

## Examples / Ejemplos

### Real Estate Projects / Proyectos inmobiliarios

| Showing / Mostrando | Links                                                                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Everything / Todo   | [In action](https://wisehouse-app.github.io/web_examples/examples/project_show_all.html) // [`source code`](examples/project_show_all.html)   |
| Chat                | [In action](https://wisehouse-app.github.io/web_examples/examples/project_only_chat.html) // [`source code`](examples/project_only_chat.html) |
| 3D                  | [In action](https://wisehouse-app.github.io/web_examples/examples/project_only_3d.html) // [`source code`](examples/project_only_3d.html)     |

### Real Estate Agencies / Agencias de bienes raíces

| Showing / Mostrando | Links                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Everything / Todo   | [In action](https://wisehouse-app.github.io/web_examples/examples/realtor_show_all.html) // [`source code`](examples/realtor_show_all.html)        |
| Chat                | [In action](https://wisehouse-app.github.io/web_examples/examples/realtor_only_chat.html) // [`source code`](examples/realtor_only_chat.html)      |
| 3D                  | [In action](https://wisehouse-app.github.io/web_examples/examples/realtor_only_3d.html) // [`source code`](examples/realtor_only_3d.html)          |
| Everything / Todo   | [In action](https://wisehouse-app.github.io/web_examples/examples/realestate_show_all.html) // [`source code`](examples/realestate_show_all.html)  |
| Chat                | [In action](https://wisehouse-app.github.io/web_examples/examples/realestate_only_chat.html) // [`source code`](examples/realestate_only_chat.html)|
| 3D                  | [In action](https://wisehouse-app.github.io/web_examples/examples/realestate_only_3d.html) // [`source code`](examples/realestate_only_3d.html)    |

## In English

Wise House offers a single point of entry for accesing and embedding the chat and render of a property. We call this the **property website**.

The structure of the URL is as follows:

```
https://wisehouse.app/chat/:property_id?:customization_options
```

> **Note:** The `customization_options` are separated from the `property_id` by a Question Mark (`?`)

This URL can be used to embed Wise House into your website as follows:

```html
<iframe
  style="border:none;height:100%;min-height:730px"
  src="https://wisehouse.app/chat/:property_id?:customization_options"
></iframe>
```

If no customization options are provided (e.g., [`https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh`](https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh)), the link will lead to the default website. This website will use the Wise House color palette, and includes three panels:

1. Property summary and agent notes.
2. 3D render
3. Chat

### Customizing the property website

Customization options can be added in order to control what is—and is not—shown in the property website, as well as some color palette.

#### Selecting panels

| Parameter   | Purpose                       | Example use                                               |
| ----------- | ----------------------------- | --------------------------------------------------------- |
| `nochat`    | Disables the chat             | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?nochat    |
| `no3d`      | Disables the 3D render        | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?no3d      |
| `nosummary` | Disables the summary          | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?nosummary |
| `notitle`   | Disables the title up the top | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?notitle   |

#### Selecting colors

| Parameter       | Color applies to                                                           | Example use                                                          |
| --------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `color`         | The default color of the text (e.g., in the summary)                       | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?color=ff11ff         |
| `accent`        | A generally noticeable color, used for buttons and some furniture          | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?accent=ff11ff        |
| `bg`            | The default background of the UI                                           | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?bg=ff11ff            |
| `receivedbg`    | The background color of the messages **received** by the user in the chat  | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?receivedbg=ff11ff    |
| `receivedcolor` | The color of the text in the messages **received** by the user in the chat | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?receivedcolor=ff11ff |
| `sentbg`        | The background color of the messages **sent** by the user in the chat      | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?sentbg=ff11ff        |
| `sentcolor`     | The color of the text in the messages **sent** by the user in the chat     | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?sentcolor=ff11ff     |
| `ground`        | The color of the ground in the 3D render                                   | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?ground=ff11ff        |
| `door`          | The color of the doors in the 3D render                                    | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?door=ff11ff          |
| `inwall`        | The color of the interior of the walls in the 3D render                    | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?inwall=ff11ff        |
| `outwall`       | The color of the exterior of the walls in the 3D render                    | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?outwall=ff11ff       |
| `floor`         | The color of the floors in the 3D render                                   | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?floor=ff11ff         |
| `ceiling`       | The color of the ceilings in the 3D render                                 | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?ceiling=ff11ff       |

### Putting it all together

Putting together multiple customization options implies chaining them, separating them with an amberstand (`&`) character. For instance:

```html
<iframe
  style="border:none;height:100%;min-height:730px"
  src="https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?door=ff11ff&nosummary&ground=ff11ff"
></iframe>
```

## En Español

Wise House ofrece un solo punto de entrada para acceder e integrar la funcionalidad de chat y render a tu sitio web. Llamamos a esto la **pagina de la propiedad**

La estructura de la URL es la siguiente:

```
https://wisehouse.app/chat/:id_de_la_propiedad?:configuracion
```

> **Nota:** La `configuracion` esta separada del `id_de_la_propiedad` por un signo de pregunta (`?`)

Esta URL puede utilizarse para integrar Wise House a tu sitio web de la siguiente manera:

```html
<iframe
  style="border:none;height:100%;min-height:730px"
  src="https://wisehouse.app/chat/:id_de_la_propiedad?:configuracion"
></iframe>
```

Si no se entrega ninguna configuración (e.g., [`https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh`](https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh)), el destino del link es la pagina por defecto.
Este sitio utiliza la paleta de colores de Wise House, e incluye tres paneles:

1. Resumen de la propiedad y notas del vendedor
2. Render 3D
3. Chat

### Configurando la pagina de la propiedad

Opciones de configuración pueden utilizarse para definir que paneles aparecen y cuales no, así como la paleta de colores a utilizar.

#### Seleccionando paneles

| Parámetro   | Propósito                                     | Ejemplo de uso                                            |
| ----------- | --------------------------------------------- | --------------------------------------------------------- |
| `nochat`    | Desactiva el chat                             | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?nochat    |
| `no3d`      | Desactiva el render 3D                        | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?no3d      |
| `nosummary` | Desactiva el resumen y las notas del vendedor | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?nosummary |
| `notitle`   | Desactiva el título                           | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?notitle   |

#### Seleccionando colores

| Parámetro       | Color aplicado a                                                                                        | Ejemplo de uso                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `color`         | El color por defecto del texto (e.g., en el resumen de la propiedad)                                    | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?color=ff11ff         |
| `accent`        | Un—generalmente—color que resalta, usado para botones y algunos elementos de mobiliario en el render 3D | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?accent=ff11ff        |
| `bg`            | El color del fondo de la interfaz gráfica                                                               | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?bg=ff11ff            |
| `receivedbg`    | El color del fondo de los mensajes **recibidos** por el usuario en el chat                              | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?receivedbg=ff11ff    |
| `receivedcolor` | El color del texto en los mensajes **enviados** por el usuario en el chat                               | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?receivedcolor=ff11ff |
| `sentbg`        | El color de fondo de los mensajes **enviados** por el usuario en el chat                                | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?sentbg=ff11ff        |
| `sentcolor`     | El color del texto en los mensajes **enviados** por el usuario en el chat                               | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?sentcolor=ff11ff     |
| `ground`        | El color del terreno en el render 3D                                                                    | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?ground=ff11ff        |
| `door`          | El color de las puertas en el render 3D                                                                 | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?door=ff11ff          |
| `inwall`        | El color del interior de los muros en el render 3D                                                      | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?inwall=ff11ff        |
| `outwall`       | El color del exterior de los muros en el render 3D                                                      | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?outwall=ff11ff       |
| `floor`         | El color del piso en el render 3D                                                                       | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?floor=ff11ff         |
| `ceiling`       | El color del cielo (de la propiedad) en el render 3D                                                    | https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?ceiling=ff11ff       |

### Juntando todo

Multiples opciones de configuración se pueden definir al encadenarlos, separados por un signo `&`. Por ejemplo:

```html
<iframe
  style="border:none;height:100%;min-height:730px"
  src="https://wisehouse.app/chat/LkKNlwl7tjAFaMXliSDh?door=ff11ff&nosummary&ground=ff11ff"
></iframe>
```

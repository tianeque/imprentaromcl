
      //Funcion para incorporar logo de whatsapp
      function agregaLinks() {
        const headId = document.getElementsByTagName('head')[0]

        //link a font awesome
        const linkFA = document.createElement('link')
        linkFA.type = 'text/css'
        linkFA.rel = 'stylesheet'
        linkFA.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'

        headId.appendChild(linkFA)

        //link a estilos whatsapp
        const linkWSP = document.createElement('link')
        linkWSP.type = 'text/css'
        linkWSP.rel = 'stylesheet'
        linkWSP.href = 'assets/logo-whatsapp/estilos-whatsapp.css'

        headId.appendChild(linkWSP)

      }

      function agregaHTML() {
        const bodyId = document.getElementsByTagName('body')[0]
        const wspContainer = document.createElement('div')
        const a = document.createElement('a')
        const i = document.createElement('i')
        
        const wsp = `<a href="https://api.whatsapp.com/send?phone=+56988395204" class="float" target="_blank">
                      <i class="fa fa-whatsapp my-float"></i>
                    </a>`
                    
        wspContainer.classList.add('logo-whatsapp')

        a.href = "https://api.whatsapp.com/send?phone=+56988395204"
        a.classList.add('float')
        a.target = "_blank"
        a.id = "link-whatsapp"

        i.classList.add('fa', 'fa-whatsapp', 'my-float')
        a.appendChild(i)
        wspContainer.appendChild(a)
        bodyId.appendChild(wspContainer)

        a.classList.remove('hidden')
        a.classList.remove('animated')
      }

      function inicio() {
        agregaLinks()
        agregaHTML()
      }
      
      document.addEventListener('DOMContentLoaded', inicio)
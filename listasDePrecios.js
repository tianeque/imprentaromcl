// Este modulo contiene 3 funciones
// formatNumber: Da formato a los numeros
// listaDePrecios: Muestra los precios en la tabla indicada
// listaDePreciosConIva: Muestra los precios en la tabla agregando IVA redondeado a la centena superior

var formatNumber = {
  separador: ".", // separador para los miles
  sepDecimal: ",", // separador para los decimales
  formatear: function (num) {
    num += "";
    var splitStr = num.split(".");
    var splitLeft = splitStr[0];
    var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : "";
    var regx = /(\d+)(\d{3})/;
    while (regx.test(splitLeft)) {
      splitLeft = splitLeft.replace(regx, "$1" + this.separador + "$2");
    }
    return this.simbol + splitLeft + splitRight;
  },
  new: function (num, simbol) {
    this.simbol = simbol || "";
    return this.formatear(num);
  },
};

const listaDePrecios = (precios, idTabla) => {
  tabla = document.getElementById(idTabla);
  template = "";

  precios.map((precio) => {
    template += `
      <tr>
        <td>${precio.cantidad / 50}</td>
        <td>${formatNumber.new(precio.cantidad)}</td>
        <td>${formatNumber.new(precio.precio, "$ ")}</td>
      </tr>`;
  });

  tabla.innerHTML = template;
};

const listaDePreciosConIva = (precios, idTabla) => {
  tabla = document.getElementById(idTabla);
  template = "";

  precios.map((precio) => {
    //calculando el precio con IVA, redondeado a la centena superior
    const precioConIva = Math.ceil((precio.precio * 1.19) / 100) * 100;
    template += `
      <tr>
        <td>${precio.cantidad / 50}</td>
        <td>${formatNumber.new(precio.cantidad)}</td>
        <td>${formatNumber.new(precioConIva, "$ ")}</td>
      </tr>`;
  });

  tabla.innerHTML = template;
};

// Nombres de variables de precios (Objects Arrays)
// precioMediaCartaDuplicado
// precioMediaCartaTriplicado
// precioMediaCartaCuadruplicado
// precioMedioOficioDuplicado
// precioMedioOficioTriplicado
// precioMedioOficioCuadruplicado
// precioCuartoCartaDuplicado
// precioCuartoCartaTriplicado
// precioCuartoCartaCuadruplicado
// precioCuartoOficioDuplicado
// precioCuartoOficioTriplicado
// precioCuartoOficioCuadruplicado
// precioCartaDuplicado
// precioCartaTriplicado
// precioCartaCuadruplicado
// precioOficioDuplicado
// precioOficioTriplicado
// precioOficioCuadruplicado
// preciosBoletaCuartoCarta
// preciosBoletaMediaCarta

const preciosProductos = {
  precioMediaCartaDuplicado: [
    {
      cantidad: 50,
      precio: 13000,
    },
    {
      cantidad: 100,
      precio: 15000,
    },
    {
      cantidad: 200,
      precio: 20600,
    },
    {
      cantidad: 250,
      precio: 22100,
    },
    {
      cantidad: 300,
      precio: 23400,
    },
    {
      cantidad: 400,
      precio: 26900,
    },
    {
      cantidad: 500,
      precio: 29900,
    },
    {
      cantidad: 1000,
      precio: 45800,
    },
    {
      cantidad: 2000,
      precio: 87500,
    },
    {
      cantidad: 3000,
      precio: 129100,
    },
    {
      cantidad: 4000,
      precio: 170000,
    },
    {
      cantidad: 5000,
      precio: 212000,
    },
  ],
  precioMediaCartaTriplicado: [
    {
      cantidad: 50,
      precio: 14000,
    },
    {
      cantidad: 100,
      precio: 16000,
    },
    {
      cantidad: 200,
      precio: 23500,
    },
    {
      cantidad: 250,
      precio: 25800,
    },
    {
      cantidad: 300,
      precio: 28000,
    },
    {
      cantidad: 400,
      precio: 32600,
    },
    {
      cantidad: 500,
      precio: 37100,
    },
    {
      cantidad: 1000,
      precio: 69700,
    },
    {
      cantidad: 2000,
      precio: 125000,
    },
    {
      cantidad: 3000,
      precio: 190400,
    },
    {
      cantidad: 4000,
      precio: 245000,
    },
    {
      cantidad: 5000,
      precio: 300000,
    },
  ],
  precioMediaCartaCuadruplicado: [
    {
      cantidad: 50,
      precio: 17000,
    },
    {
      cantidad: 100,
      precio: 20700,
    },
    {
      cantidad: 200,
      precio: 26500,
    },
    {
      cantidad: 250,
      precio: 29500,
    },
    {
      cantidad: 300,
      precio: 32500,
    },
    {
      cantidad: 400,
      precio: 38300,
    },
    {
      cantidad: 500,
      precio: 44300,
    },
    {
      cantidad: 1000,
      precio: 83600,
    },
    {
      cantidad: 2000,
      precio: 162000,
    },
    {
      cantidad: 3000,
      precio: 241000,
    },
    {
      cantidad: 4000,
      precio: 310000,
    },
    {
      cantidad: 5000,
      precio: 380000,
    },
  ],
  precioMedioOficioDuplicado: [
    {
      cantidad: 50,
      precio: 15500,
    },
    {
      cantidad: 100,
      precio: 17900,
    },
    {
      cantidad: 200,
      precio: 24600,
    },
    {
      cantidad: 250,
      precio: 26300,
    },
    {
      cantidad: 300,
      precio: 27900,
    },
    {
      cantidad: 400,
      precio: 32100,
    },
    {
      cantidad: 500,
      precio: 35600,
    },
    {
      cantidad: 1000,
      precio: 54600,
    },
    {
      cantidad: 2000,
      precio: 104200,
    },
    {
      cantidad: 3000,
      precio: 153700,
    },
    {
      cantidad: 4000,
      precio: 202300,
    },
    {
      cantidad: 5000,
      precio: 252300,
    },
  ],
  precioMedioOficioTriplicado: [
    {
      cantidad: 50,
      precio: 16700,
    },
    {
      cantidad: 100,
      precio: 19100,
    },
    {
      cantidad: 200,
      precio: 28000,
    },
    {
      cantidad: 250,
      precio: 30800,
    },
    {
      cantidad: 300,
      precio: 33400,
    },
    {
      cantidad: 400,
      precio: 38800,
    },
    {
      cantidad: 500,
      precio: 44200,
    },
    {
      cantidad: 1000,
      precio: 83000,
    },
    {
      cantidad: 2000,
      precio: 148800,
    },
    {
      cantidad: 3000,
      precio: 226600,
    },
    {
      cantidad: 4000,
      precio: 291600,
    },
    {
      cantidad: 5000,
      precio: 357000,
    },
  ],
  precioMedioOficioCuadruplicado: [
    {
      cantidad: 50,
      precio: 20300,
    },
    {
      cantidad: 100,
      precio: 24700,
    },
    {
      cantidad: 200,
      precio: 31600,
    },
    {
      cantidad: 250,
      precio: 35200,
    },
    {
      cantidad: 300,
      precio: 38700,
    },
    {
      cantidad: 400,
      precio: 45600,
    },
    {
      cantidad: 500,
      precio: 52800,
    },
    {
      cantidad: 1000,
      precio: 99500,
    },
    {
      cantidad: 2000,
      precio: 192800,
    },
    {
      cantidad: 3000,
      precio: 286800,
    },
    {
      cantidad: 4000,
      precio: 368900,
    },
  ],
  precioCuartoCartaDuplicado: [
    {
      cantidad: 50,
      precio: 6000,
    },
    {
      cantidad: 100,
      precio: 10000,
    },
    {
      cantidad: 200,
      precio: 17800,
    },
    {
      cantidad: 250,
      precio: 18700,
    },
    {
      cantidad: 300,
      precio: 19600,
    },
    {
      cantidad: 400,
      precio: 21420,
    },
    {
      cantidad: 500,
      precio: 23200,
    },
    {
      cantidad: 1000,
      precio: 32200,
    },
    {
      cantidad: 2000,
      precio: 50100,
    },
    {
      cantidad: 3000,
      precio: 78100,
    },
    {
      cantidad: 4000,
      precio: 96000,
    },
    {
      cantidad: 5000,
      precio: 125000,
    },
  ],
  precioCuartoCartaTriplicado: [
    {
      cantidad: 50,
      precio: 9000,
    },
    {
      cantidad: 100,
      precio: 12000,
    },
    {
      cantidad: 200,
      precio: 19500,
    },
    {
      cantidad: 250,
      precio: 20700,
    },
    {
      cantidad: 300,
      precio: 21900,
    },
    {
      cantidad: 400,
      precio: 24400,
    },
    {
      cantidad: 500,
      precio: 26900,
    },
    {
      cantidad: 1000,
      precio: 39270,
    },
    {
      cantidad: 2000,
      precio: 74100,
    },
    {
      cantidad: 3000,
      precio: 102000,
    },
    {
      cantidad: 4000,
      precio: 120000,
    },
    {
      cantidad: 5000,
      precio: 140000,
    },
  ],
  precioCuartoCartaCuadruplicado: [
    {
      cantidad: 50,
      precio: 10000,
    },
    {
      cantidad: 100,
      precio: 13000,
    },
    {
      cantidad: 200,
      precio: 21100,
    },
    {
      cantidad: 250,
      precio: 22700,
    },
    {
      cantidad: 300,
      precio: 24300,
    },
    {
      cantidad: 400,
      precio: 27400,
    },
    {
      cantidad: 500,
      precio: 30600,
    },
    {
      cantidad: 1000,
      precio: 46000,
    },
    {
      cantidad: 2000,
      precio: 87000,
    },
    {
      cantidad: 3000,
      precio: 125000,
    },
    {
      cantidad: 4000,
      precio: 160000,
    },
    {
      cantidad: 5000,
      precio: 190000,
    },
  ],
  precioCuartoOficioDuplicado: [
    {
      cantidad: 50,
      precio: 15500,
    },
    {
      cantidad: 100,
      precio: 16500,
    },
    {
      cantidad: 200,
      precio: 18700,
    },
    {
      cantidad: 250,
      precio: 19800,
    },
    {
      cantidad: 300,
      precio: 20900,
    },
    {
      cantidad: 400,
      precio: 23000,
    },
    {
      cantidad: 500,
      precio: 25100,
    },
    {
      cantidad: 1000,
      precio: 35900,
    },
    {
      cantidad: 2000,
      precio: 57500,
    },
    {
      cantidad: 3000,
      precio: 89000,
    },
    {
      cantidad: 4000,
      precio: 110000,
    },
    {
      cantidad: 5000,
      precio: 142000,
    },
  ],
  precioCuartoOficioTriplicado: [
    {
      cantidad: 50,
      precio: 16200,
    },
    {
      cantidad: 100,
      precio: 17700,
    },
    {
      cantidad: 200,
      precio: 20700,
    },
    {
      cantidad: 250,
      precio: 22200,
    },
    {
      cantidad: 300,
      precio: 23800,
    },
    {
      cantidad: 400,
      precio: 26800,
    },
    {
      cantidad: 500,
      precio: 30000,
    },
    {
      cantidad: 1000,
      precio: 45000,
    },
    {
      cantidad: 2000,
      precio: 85000,
    },
    {
      cantidad: 3000,
      precio: 125000,
    },
    {
      cantidad: 4000,
      precio: 155000,
    },
    {
      cantidad: 5000,
      precio: 195000,
    },
  ],
  precioCuartoOficioCuadruplicado: [
    {
      cantidad: 50,
      precio: 17000,
    },
    {
      cantidad: 100,
      precio: 19000,
    },
    {
      cantidad: 200,
      precio: 22800,
    },
    {
      cantidad: 250,
      precio: 24800,
    },
    {
      cantidad: 300,
      precio: 26700,
    },
    {
      cantidad: 400,
      precio: 30600,
    },
    {
      cantidad: 500,
      precio: 34500,
    },
    {
      cantidad: 1000,
      precio: 54000,
    },
    {
      cantidad: 2000,
      precio: 102600,
    },
    {
      cantidad: 3000,
      precio: 151500,
    },
    {
      cantidad: 4000,
      precio: 200000,
    },
    {
      cantidad: 5000,
      precio: 250000,
    },
  ],
  precioCartaDuplicado: [
    {
      cantidad: 50,
      precio: 17100,
    },
    {
      cantidad: 100,
      precio: 20100,
    },
    {
      cantidad: 200,
      precio: 26060,
    },
    {
      cantidad: 250,
      precio: 28900,
    },
    {
      cantidad: 300,
      precio: 31900,
    },
    {
      cantidad: 400,
      precio: 37700,
    },
    {
      cantidad: 500,
      precio: 43700,
    },
    {
      cantidad: 1000,
      precio: 83200,
    },
    {
      cantidad: 2000,
      precio: 162000,
    },
    {
      cantidad: 3000,
      precio: 23000,
    },
    {
      cantidad: 4000,
      precio: 300000,
    },
    {
      cantidad: 5000,
      precio: 370000,
    },
  ],
  precioCartaTriplicado: [
    {
      cantidad: 50,
      precio: 18800,
    },
    {
      cantidad: 100,
      precio: 23100,
    },
    {
      cantidad: 200,
      precio: 31800,
    },
    {
      cantidad: 250,
      precio: 36100,
    },
    {
      cantidad: 300,
      precio: 40340,
    },
    {
      cantidad: 400,
      precio: 59000,
    },
    {
      cantidad: 500,
      precio: 67600,
    },
    {
      cantidad: 1000,
      precio: 120800,
    },
    {
      cantidad: 2000,
      precio: 237000,
    },
    {
      cantidad: 3000,
      precio: 340000,
    },
    {
      cantidad: 4000,
      precio: 430000,
    },
    {
      cantidad: 5000,
      precio: 530000,
    },
  ],
  precioCartaCuadruplicado: [
    {
      cantidad: 50,
      precio: 20500,
    },
    {
      cantidad: 100,
      precio: 26200,
    },
    {
      cantidad: 200,
      precio: 37500,
    },
    {
      cantidad: 250,
      precio: 43100,
    },
    {
      cantidad: 300,
      precio: 58900,
    },
    {
      cantidad: 400,
      precio: 70210,
    },
    {
      cantidad: 500,
      precio: 81500,
    },
    {
      cantidad: 1000,
      precio: 158300,
    },
    {
      cantidad: 2000,
      precio: 310000,
    },
    {
      cantidad: 3000,
      precio: 430000,
    },
    {
      cantidad: 4000,
      precio: 580000,
    },
    {
      cantidad: 5000,
      precio: 700000,
    },
  ],
  precioOficioDuplicado: [
    {
      cantidad: 50,
      precio: 18100,
    },
    {
      cantidad: 100,
      precio: 22000,
    },
    {
      cantidad: 200,
      precio: 29000,
    },
    {
      cantidad: 250,
      precio: 32700,
    },
    {
      cantidad: 300,
      precio: 36300,
    },
    {
      cantidad: 400,
      precio: 43700,
    },
    {
      cantidad: 500,
      precio: 51000,
    },
    {
      cantidad: 1000,
      precio: 97600,
    },
    {
      cantidad: 2000,
      precio: 191000,
    },
    {
      cantidad: 3000,
      precio: 284300,
    },
    {
      cantidad: 4000,
      precio: 377000,
    },
    {
      cantidad: 5000,
      precio: 450000,
    },
  ],
  precioOficioTriplicado: [
    {
      cantidad: 50,
      precio: 20100,
    },
    {
      cantidad: 100,
      precio: 25500,
    },
    {
      cantidad: 200,
      precio: 36300,
    },
    {
      cantidad: 250,
      precio: 41700,
    },
    {
      cantidad: 300,
      precio: 47000,
    },
    {
      cantidad: 400,
      precio: 67900,
    },
    {
      cantidad: 500,
      precio: 78700,
    },
    {
      cantidad: 1000,
      precio: 142500,
    },
    {
      cantidad: 2000,
      precio: 280000,
    },
    {
      cantidad: 3000,
      precio: 418000,
    },
    {
      cantidad: 4000,
      precio: 556000,
    },
    {
      cantidad: 5000,
      precio: 693000,
    },
  ],
  precioOficioCuadruplicado: [
    {
      cantidad: 50,
      precio: 22100,
    },
    {
      cantidad: 100,
      precio: 29300,
    },
    {
      cantidad: 200,
      precio: 43400,
    },
    {
      cantidad: 250,
      precio: 50600,
    },
    {
      cantidad: 300,
      precio: 67700,
    },
    {
      cantidad: 400,
      precio: 82000,
    },
    {
      cantidad: 500,
      precio: 96100,
    },
    {
      cantidad: 1000,
      precio: 187300,
    },
    {
      cantidad: 2000,
      precio: 370000,
    },
    {
      cantidad: 3000,
      precio: 552000,
    },
    {
      cantidad: 4000,
      precio: 734200,
    },
    {
      cantidad: 5000,
      precio: 916500,
    },
  ],
  preciosBoletaCuartoCarta: [
    {
      cantidad: 50,
      precio: 7000,
    },
    {
      cantidad: 100,
      precio: 12000,
    },
    {
      cantidad: 200,
      precio: 21360,
    },
    {
      cantidad: 250,
      precio: 22500,
    },
    {
      cantidad: 300,
      precio: 23500,
    },
    {
      cantidad: 400,
      precio: 25700,
    },
    {
      cantidad: 500,
      precio: 27800,
    },
    {
      cantidad: 1000,
      precio: 38500,
    },
    {
      cantidad: 2000,
      precio: 60100,
    },
    {
      cantidad: 2500,
      precio: 78100,
    },
    {
      cantidad: 3000,
      precio: 93000,
    },
    {
      cantidad: 4000,
      precio: 115000,
    },
    {
      cantidad: 5000,
      precio: 145000,
    },
  ],
  preciosBoletaMediaCarta: [
    {
      cantidad: 50,
      precio: 9600,
    },
    {
      cantidad: 100,
      precio: 14400,
    },
    {
      cantidad: 200,
      precio: 24600,
    },
    {
      cantidad: 250,
      precio: 26600,
    },
    {
      cantidad: 300,
      precio: 28400,
    },
    {
      cantidad: 400,
      precio: 32300,
    },
    {
      cantidad: 500,
      precio: 36000,
    },
    {
      cantidad: 1000,
      precio: 54800,
    },
    {
      cantidad: 2000,
      precio: 103000,
    },
    {
      cantidad: 2500,
      precio: 125000,
    },
    {
      cantidad: 3000,
      precio: 154800,
    },
    {
      cantidad: 4000,
      precio: 204000,
    },
    {
      cantidad: 5000,
      precio: 254400,
    },
  ],
};

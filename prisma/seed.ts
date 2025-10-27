import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main(){
    const tiposUsuario= [
        { tipo: 'emprendedor standard' },
        { tipo: 'emprendedor premium' },
        { tipo: 'inversionista standard' },
        { tipo: 'inversionista premium' },
    ]

    const tecnologias_software = [
        { nombre: 'react' },
        { nombre: 'vue' },
        { nombre: 'angular' },
        
    ]

    const estados = [
        { nombre: 'activo' },
        { nombre: 'inactivo' },     
    ]



    const tecnologias_hardware = [
        { nombre: 'arduino' },
        { nombre: 'raspberry' },
        { nombre: 'iot' },
    ]

    for(const t of tiposUsuario){
        await prisma.tipo_usuario.create({
            data:{
                tipo: t.tipo
            }
        })
    }

    for(const tecs of tecnologias_software){
        
        await prisma.tecnologia.create({
            data:{
                tecnologia: tecs.nombre,
                tipo: true
            }
        })
    }

    for(const est of estados){
        await prisma.estado.create({
            data:{
                nombre: est.nombre
            }
        })
    }

    for(const tech of tecnologias_hardware){
        
      await prisma.tecnologia.create({
          data:{
              tecnologia: tech.nombre,
              tipo: false
          }
      })
  }
    console.log('Seed ejecutado correctamente 🚀');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


import type { Server } from "node:http";
import { app } from "./app.ts";
import { prisma } from "./app/lib/prisma.ts";

const port = process.env.PORT || 5000;

let server: Server;

const bootstrap = async () => {
  try {
    await prisma.$connect()
    server = app.listen(port, () => {
      console.log(`server is running on ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server ", error);
    await prisma.$disconnect()
  }
};

// uncaught error handler
process.on("uncaughtException", (error) => {
  console.log("uncaught exception detected .... shutting down ... ", error);

  if (server) {
    process.exit(1);
  }

  process.exit(1);
});

// SIGTERM signal handler
process.on('SIGTERM', ()=>{
    console.log("SIGTERM signal is received. shutting down server .....");

    if(server){
        console.log("Server is closed gracefully")
        process.exit(1);
    }

    process.exit(1);
})

// SIGINT signal handler
process.on("SIGINT", ()=>{
    console.log("SIGINT signal is received. shutting down server ....");

    if(server){
        console.log("server is closed gracefully")
        process.exit(1)
    }

    process.exit(1)
})

// unhandle rejection handler
process.on('unhandledRejection', (error)=>{
    console.log("unhandle rejection detected ..... shutting down ........ ", error);

    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }

    process.exit(1)
})

bootstrap();

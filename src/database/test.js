const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    await saveOrphanage(db, {
        id: 1,
        lat: "-7.1373638",
        lng: "-34.8775738",
        name: "Lar dos gatos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerablidade socia",
        whatsapp: "834449494449",
        images: [
            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80",

            "https://images.unsplash.com/photo-1502802729233-6bc93ca7ad71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até as 17h",
        open_on_weekends: "0"
    })
    
    
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
    const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanages)


    // deletar um dado da tabela
    /* await db.run("DELETE FROM orphanages WHERE id = '4'")
    console.log("deletado")*/

    //console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
})
import test, { expect } from "@playwright/test";
import User from '../TestModel/ReqTest'

test.describe('Tests utilisateur', function(){
    let user1: User
    user1= new User('Marco', 'Polo', '21/03/1898','Veniz')
    console.log(user1.AjouterUser());
    console.log(user1.getId());

    test('Récupération du nom', async function(){
        console.log(user1.getNom());
        await expect(user1.getNom()).not.toBeNull()
        await expect (user1.getNom()).toEqual('Marco')
    })

    test('Récupération du prenom', async function(){
        console.log(user1.getNom());
        await expect (user1.getPrenom()).toEqual('Polo')
    })

    test('Récupération de l\'adresse', async function(){
        console.log(user1.getAdresse());
        await expect (user1.getAdresse()).toEqual('Veniz')
    })

    test('Modification du nom', async function(){
        user1.setNom("Jenjis")
        console.log(user1.getNom());
        await expect(user1.getNom()).toEqual('Jenjis')
    })

    test('Modification du prenom', async function(){
        user1.setPrenom("Kan")
        console.log(user1.getPrenom());
        await expect(user1.getPrenom()).toEqual('Kan')
    })

})


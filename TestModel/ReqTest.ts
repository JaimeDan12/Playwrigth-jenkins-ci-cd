
class User{

    private Uid:number
    private nom:string
    private prenom:string
    private date_nais: string 
    private adresse:string

    /**
     *  
     * @param nom nom de l'utilisateur
     * @param prenom prenom utilisateur
     * @param date_nais date de naissance utilisateur
     * @param adresse adresse utilisateur 
     */
    constructor( 
        nom: string, 
        prenom:string, 
        date_nais:string,
        adresse:string
        )
    {
        this.Uid = Date.now()
        this.nom=nom
        this.prenom=prenom
        this.date_nais=date_nais
        this.adresse=adresse
    }
    
    /**
     * 
     * @returns retourne l'id utilisateur
     */
    public getId():number{
        return this.Uid
    }
    
    /**
     * 
     * @returns retourne le nom de l'utilisateur
     */
    public getNom (): string{
        return this.nom;
    }

    /**
     * 
     * @param nom modifie le nom de l'utilisateur
     */
    public setNom(nom: string):void{
        this.nom=nom
    }

    /**
     * 
     * @returns retourne le prenom
     */
    public getPrenom(): string{
        return this.prenom
    }
    
    /**
     * 
     * @param prenom modifie le prenom
     */
    public setPrenom(prenom: string):void{
        this.prenom=prenom
    }

    /**
     * 
     * @returns retourne la date de naissance
     */
    public getDate_nais(): string{
        return this.date_nais
    }

    /**
     * 
     * @param date_nais modifie la date de naissance
     */
    public setDate_nais(date_nais: string):void{
        this.date_nais= date_nais 
    }

    /**
     * 
     * @returns retourne l'adresse
     */
    public getAdresse(): string{
        return this.adresse
    }

    /**
     * 
     * @param adresse modifie l'adresse
     */
    public setAdresse(adresse: string):void{
        this.adresse= adresse 
    }

    /**
     * 
     * @returns Renvoi vrai ou faux lorsqu'on ajoute un utilisateur
     */
    public AjouterUser(): boolean{
        return true
    }

    /**
     * 
     * @returns Renvoi vrai ou faux lorsqu'on mofdifie un utilisateur
     */
    public ModifUser( ):boolean{
        return true
    }

    /**
     * 
     * @returns Renvoi vrai ou faux lorsqu'on supprime un utilisateur
     */
    public SuppUser(): boolean{
        return true
    }
}

export default User
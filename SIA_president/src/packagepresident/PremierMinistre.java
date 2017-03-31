package packagepresident;

/**
 * Write a description of class PremierMinistre here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class PremierMinistre
{
    // instance variables - replace the example below with your own
    private String nom;
    private President myPresident;

    /**
     * Constructor for objects of class PremierMinistre
     */
    public PremierMinistre()
    {
        // initialise instance variables
        this.nom = "premierMinistre";
        this.myPresident = new President();
    }

    public String getNom()
    {
        // put your code here
        return this.nom;
    }
    
    public President getPresident()
    {
        // put your code here
        return this.myPresident;
    }
    
    public void setNom(String nom)
    {
        // put your code here
        this.nom = nom;
    }
    
    public void setPresident(President myPresident)
    {
        // put your code here
        this.myPresident = myPresident;
    }
    
    public void setInListeMyPresident(){
    	this.myPresident.addListePremiersMinistres(this);
    }
    
    public int getNombreMandatsPresident(){
        return this.myPresident.getNombreMandats();
    }
}

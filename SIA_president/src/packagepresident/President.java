package packagepresident;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Write a description of class President here.
 * 
 * @author (your name)
 * @version (a version number or a date)
 */
public class President {
	// instance variables - replace the example below with your own
	private String nom;
	private int nombreMandats;
	private List<PremierMinistre> listePremiersMinistres;

	/**
	 * Constructor for objects of class President
	 */
	public President() {
		// initialise instance variables
		this.nom = "nompresident";
		this.nombreMandats = 0;
		this.listePremiersMinistres = new ArrayList<PremierMinistre>();
	}

	public String getNom() {
		return this.nom;
	}

	public int getNombreMandats() {
		return this.nombreMandats;
	}

	public List<PremierMinistre> getListePremiersMinistres() {
		List<PremierMinistre> stuff = this.listePremiersMinistres;
		List<PremierMinistre> list = new ArrayList<PremierMinistre>(stuff);
		list = Collections.unmodifiableList(list);
		return list;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public void setNombreMandats(int nombreMandats) {
		if (nombreMandats >= 0)
			this.nombreMandats = nombreMandats;
	}

	public void addListePremiersMinistres(PremierMinistre myPremierMinistre) {
		this.listePremiersMinistres.add(myPremierMinistre);
	}
}

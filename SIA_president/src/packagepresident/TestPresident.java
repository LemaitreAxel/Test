package packagepresident;

import static org.junit.Assert.*;

import java.util.ArrayList;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

/**
 * The test class TestPresident.
 *
 * @author  (your name)
 * @version (a version number or a date)
 */
public class TestPresident
{
    private President sarkozy;
    private PremierMinistre fillon;    

    /**
     * Default constructor for test class TestPresident
     */
    public TestPresident()
    {
    }

    /**
     * Sets up the test fixture.
     *
     * Called before every test case method.
     */
    @Before
    public void setUp()
    {
        sarkozy = new President();
        sarkozy.setNombreMandats(1);
        fillon = new PremierMinistre();
        fillon.setPresident(sarkozy);
        fillon.setInListeMyPresident();
    }

    /**
     * Tears down the test fixture.
     *
     * Called after every test case method.
     */
    @After
    public void tearDown()
    {
    }

    @Test
    public void presidentTest()
    {
        President sarkozy = new President();
        sarkozy.setNombreMandats(1);
        assertEquals(1, sarkozy.getNombreMandats());
    }

    @Test
    public void testDuo()
    {
        assertEquals(1, fillon.getNombreMandatsPresident());
    }
    
    @Test
    public void testListe(){
        assertEquals(fillon, sarkozy.getListePremiersMinistres().get(0));
    }
    
    @Test
    public void testGetters(){
    	assertEquals("nompresident", sarkozy.getNom());
    	assertEquals(1, sarkozy.getNombreMandats());
    	assertEquals("premierMinistre", fillon.getNom());
    	assertEquals(sarkozy, fillon.getPresident());
        assertEquals(fillon, sarkozy.getListePremiersMinistres().get(0));
    }

    @Test
    public void testConstructeur(){
        President chirac = new President();
    	assertEquals(0, chirac.getNombreMandats());
    	assertEquals("nompresident", chirac.getNom());
    	PremierMinistre jospin = new PremierMinistre();
    	assertEquals("premierMinistre", jospin.getNom());
    }
    
    @Test
    public void testSetters(){
        President chirac = new President();
        chirac.setNom("Chirac");
    	assertEquals("Chirac", chirac.getNom());
    	chirac.setNombreMandats(2);
    	assertEquals(2, chirac.getNombreMandats());
    	PremierMinistre jospin = new PremierMinistre();
        jospin.setNom("Jospin");
    	assertEquals("Jospin", jospin.getNom());
    	jospin.setPresident(chirac);
    	assertEquals(chirac, jospin.getPresident());
    	jospin.setInListeMyPresident();
        assertEquals(jospin, chirac.getListePremiersMinistres().get(0));
    }

    @Test
    public void testAssociations(){
        President chirac = new President();
    	PremierMinistre jospin = new PremierMinistre();
    	jospin.setPresident(chirac);
    	assertEquals(chirac, jospin.getPresident());
    	jospin.setInListeMyPresident();
        assertEquals(jospin, chirac.getListePremiersMinistres().get(0));
    }

    @Test
    public void testMethodesSimples(){
        President chirac = new President();
    	PremierMinistre jospin = new PremierMinistre();
    	chirac.addListePremiersMinistres(jospin);
    	jospin.setPresident(chirac);
    	chirac.setNombreMandats(2);
    	jospin.getNombreMandatsPresident();
        assertEquals(2, jospin.getNombreMandatsPresident());
    }
    
    @Test
    public void testParametres(){
        President chirac = new President();
    	chirac.setNombreMandats(-1);
        assertNotEquals(-1, chirac.getNombreMandats());
    }    
}





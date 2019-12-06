package com.hbt.semillero.ejb;

import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.log4j.Logger;



public class GestionarPersonaBean {

	
	final static Logger logger = Logger.getLogger(GestionarPersonaBean.class);

	
	@PersistenceContext
	private EntityManager em;

	
	@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
	
	
	public void crearPersona(PersonaDTO PersonaNueva) {
		logger.debug("Se ejecuta el metodo Nueva Persona");
		logger.debug("Se finaiza el metodo Nueva Persona");
	}
	
	
	public void modificarPersona() {
		logger.debug("Se ejecuta el metodo Modificar Persona");
		logger.debug("Se finaiza el metodo Modificar Persona");
	}
	
	
	
	public void eliminarPersona() {
		logger.debug("Se ejecuta el metodo Eliminar Persona");
		logger.debug("Se finaiza el metodo Eliminar Persona");
		
	}
	
	@TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
	public void consultarPersona() {
		
		logger.debug("Se ejecuta el metodo consultar Persona");
		logger.debug("Se finaiza el metodo consultar Persona");
		
	}
	
	
	
	
	
	
	
	}
	
	
	
	
	


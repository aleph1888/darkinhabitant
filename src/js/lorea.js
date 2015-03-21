/*
 * @fileOverview Main object for generic lorea backup holder api.
 */
'use strict';

define(function() {
// lorea_bup_holder object.
var lorea_bup_holder = {

    /**
     * Internal api version. Gets saved by the backend as servicesStatus.apiVersion,
     * so frontend code can see if the backend needs to be restarted.
     * check like:
     *
     *  lorea_bup_holder.apiVersion === lorea_bup_holder.core.servicesStatus.apiVersion
     */
    apiVersion: 0,

    /**
     * Get the backup service.
     * 
     * @returns {Object}
     */
    get core() {return chrome.extension.getBackgroundPage();},

    /**
     * Get a service from the background script.
     * 
     * @returns {Object}
     */
    get service() {return lorea_bup_holder.core.getServices();},

    /**
     * Identity key ring. Holds all identities.
     * 
     * @returns {Object}
     */
    getKeyRing: function() {return lorea_bup_holder.core.getKeyRing();},

    /**
     * Light client
     * 
     * @returns {Object}
     */
    getClient: function() {return lorea_bup_holder.core.getClient();},

    /**
     * Get identity
     * 
     * @param {Number} [idx] Index of the identity, default is current.
     * @returns {Object}
     */
    getIdentity: function(idx) {return lorea_bup_holder.core.getIdentity(idx);},

    /**
     * Lobby transport
     * 
     * @returns {Object}
     */
    getLobbyTransport: function() {return lorea_bup_holder.core.getLobbyTransport();}
};
return lorea_bup_holder;
});

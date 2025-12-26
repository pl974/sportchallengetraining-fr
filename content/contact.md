---
title: "Contact"
description: "Une question sur l'entraînement, la nutrition ou la récupération ? Contacte-nous via ce formulaire."
layout: "single"
---

## Envoie-nous un message

Tu as une question spécifique sur un article ? Une suggestion de sujet à traiter ? Un retour d'expérience à partager ?

Remplis le formulaire ci-dessous. Nous répondons généralement sous 48 heures.

<form name="contact" method="POST" data-netlify="true" class="contact-form">
  <div class="form-group">
    <label for="name">Prénom</label>
    <input type="text" id="name" name="name" required placeholder="Ton prénom">
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required placeholder="ton@email.com">
  </div>
  
  <div class="form-group">
    <label for="subject">Sujet</label>
    <select id="subject" name="subject" required>
      <option value="">Choisis un sujet</option>
      <option value="question">Question sur un article</option>
      <option value="suggestion">Suggestion de contenu</option>
      <option value="feedback">Retour d'expérience</option>
      <option value="collaboration">Proposition de collaboration</option>
      <option value="autre">Autre</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required placeholder="Ton message..."></textarea>
  </div>
  
  <button type="submit" class="btn btn--primary">Envoyer</button>
</form>

## Autres moyens de contact

Tu peux également nous retrouver sur les réseaux sociaux pour suivre les dernières publications et échanger avec la communauté.

Les liens sont disponibles en bas de chaque page.

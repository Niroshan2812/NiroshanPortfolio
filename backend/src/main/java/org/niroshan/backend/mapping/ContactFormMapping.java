package org.niroshan.backend.mapping;

import org.niroshan.backend.Model.ContactForm;
import org.niroshan.backend.dto.ContactFormDTO;

public class ContactFormMapping {
    public static ContactFormDTO  maptoContactFormDTO (ContactForm contactForm) {
        return new ContactFormDTO(
                contactForm.getName(),
                contactForm.getEmail(),
                contactForm.getMessage()
        );
    }
    public static ContactForm maptoContactForm (ContactFormDTO contactFormDTO) {
        return new ContactForm(
                contactFormDTO.getName(),
                contactFormDTO.getEmail(),
                contactFormDTO.getMessage()
        );
    }
}

package org.niroshan.backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "portfoliodetails")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Portfolio {
    @Id
    private Long id;
    private String shortDescription;
    private String description;
    private String githubLink;
}

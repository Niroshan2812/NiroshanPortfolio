package org.niroshan.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "portfoliodetails")
public class Portfolio {
    @Id

    private String id;
    private String name;
    private String shortDescription;
    private String description;
    private String githubLink;
    private List<String> imageUrls;

    public Portfolio(String id,String name, String shortDescription, String description, String githubLink, List<String> imageUrls) {
        this.id = id;
        this.name = name;
        this.shortDescription = shortDescription;
        this.description = description;
        this.githubLink = githubLink;
        this.imageUrls = imageUrls;
    }

    public Portfolio() {
    }

    public String getId() {
        return this.id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortDescription() {
        return this.shortDescription;
    }

    public String getDescription() {
        return this.description;
    }

    public String getGithubLink() {
        return this.githubLink;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setGithubLink(String githubLink) {
        this.githubLink = githubLink;
    }

    public List<String> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(List<String> imageUrls) {
        this.imageUrls = imageUrls;
    }

    public boolean equals(final Object o) {
        if (o == this) return true;
        if (!(o instanceof Portfolio)) return false;
        final Portfolio other = (Portfolio) o;
        if (!other.canEqual((Object) this)) return false;
        final Object this$id = this.getId();
        final Object other$id = other.getId();
        if (this$id == null ? other$id != null : !this$id.equals(other$id)) return false;
        final Object this$name = this.getName();
        final Object other$name = other.getName();
        if(this$name == null ? other$name != null : !this$name.equals(other$name)) return false;
        final Object this$shortDescription = this.getShortDescription();
        final Object other$shortDescription = other.getShortDescription();
        if (this$shortDescription == null ? other$shortDescription != null : !this$shortDescription.equals(other$shortDescription))
            return false;
        final Object this$description = this.getDescription();
        final Object other$description = other.getDescription();
        if (this$description == null ? other$description != null : !this$description.equals(other$description))
            return false;
        final Object this$githubLink = this.getGithubLink();
        final Object other$githubLink = other.getGithubLink();
        if (this$githubLink == null ? other$githubLink != null : !this$githubLink.equals(other$githubLink))
            return false;
        final Object this$imageUrls = this.getImageUrls();
        final Object other$imageUrls = other.getImageUrls();
        if (this$imageUrls == null ? other$imageUrls != null : !this$imageUrls.equals(other$imageUrls)) {
            return false;


        }
        return true;
    }

    protected boolean canEqual(final Object other) {
        return other instanceof Portfolio;
    }

    @Override
    public String toString() {
        return "Portfolio{" +
                "id=" + id +
                "name"+name+
                ", shortDescription='" + shortDescription + '\'' +
                ", description='" + description + '\'' +
                ", githubLink='" + githubLink + '\'' +
                ", imageUrls=" + imageUrls +
                '}';
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        final Object $id = this.getId();
        result = result * PRIME + ($id == null ? 43 : $id.hashCode());
        final Object $name = this.getName();
        result = result * PRIME + ($name == null ? 43 : $name.hashCode());
        final Object $shortDescription = this.getShortDescription();
        result = result * PRIME + ($shortDescription == null ? 43 : $shortDescription.hashCode());
        final Object $description = this.getDescription();
        result = result * PRIME + ($description == null ? 43 : $description.hashCode());
        final Object $githubLink = this.getGithubLink();
        result = result * PRIME + ($githubLink == null ? 43 : $githubLink.hashCode());
        final Object $imageUrls = this.getImageUrls();
        result = result * PRIME + ($imageUrls == null ? 43 : $imageUrls.hashCode());
        return result;


    }

}

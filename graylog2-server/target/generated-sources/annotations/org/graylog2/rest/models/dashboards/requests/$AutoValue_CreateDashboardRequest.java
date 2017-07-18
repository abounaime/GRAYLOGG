
package org.graylog2.rest.models.dashboards.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 abstract class $AutoValue_CreateDashboardRequest extends CreateDashboardRequest {

  private final String title;
  private final String description;
  private final boolean favoriteDash;

  $AutoValue_CreateDashboardRequest(
      String title,
      String description,
      boolean favoriteDash) {
    if (title == null) {
      throw new NullPointerException("Null title");
    }
    this.title = title;
    if (description == null) {
      throw new NullPointerException("Null description");
    }
    this.description = description;
    this.favoriteDash = favoriteDash;
  }

  @JsonProperty
  @Override
  public String title() {
    return title;
  }

  @JsonProperty
  @Override
  public String description() {
    return description;
  }

  @JsonProperty(value = "isFavoriteDash")
  @Override
  public boolean favoriteDash() {
    return favoriteDash;
  }

  @Override
  public String toString() {
    return "CreateDashboardRequest{"
        + "title=" + title + ", "
        + "description=" + description + ", "
        + "favoriteDash=" + favoriteDash
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof CreateDashboardRequest) {
      CreateDashboardRequest that = (CreateDashboardRequest) o;
      return (this.title.equals(that.title()))
           && (this.description.equals(that.description()))
           && (this.favoriteDash == that.favoriteDash());
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.title.hashCode();
    h *= 1000003;
    h ^= this.description.hashCode();
    h *= 1000003;
    h ^= this.favoriteDash ? 1231 : 1237;
    return h;
  }

}

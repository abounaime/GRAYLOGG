
package org.graylog2.indexer.esplugin;

import java.util.Set;
import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 abstract class $AutoValue_IndicesClosedEvent extends IndicesClosedEvent {

  private final Set<String> indices;

  $AutoValue_IndicesClosedEvent(
      Set<String> indices) {
    if (indices == null) {
      throw new NullPointerException("Null indices");
    }
    this.indices = indices;
  }

  @Override
  public Set<String> indices() {
    return indices;
  }

  @Override
  public String toString() {
    return "IndicesClosedEvent{"
        + "indices=" + indices
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof IndicesClosedEvent) {
      IndicesClosedEvent that = (IndicesClosedEvent) o;
      return (this.indices.equals(that.indices()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.indices.hashCode();
    return h;
  }

}

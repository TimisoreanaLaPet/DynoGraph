package dynograph.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Setter
@Getter
@AllArgsConstructor
public class State {
    private String label;
    private String borderColor;
    private String fillColor;
    private Collection<State> children;
    private String id;
}

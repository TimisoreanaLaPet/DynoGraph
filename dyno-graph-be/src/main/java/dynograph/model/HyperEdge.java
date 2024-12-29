package dynograph.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class HyperEdge {
    private String label;
    private String color;
    private State predecessor;
    private State successor;
}

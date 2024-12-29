package dynograph.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
public class DynamicGraph {
    private Collection<HyperEdge> hyperEdges;
    private Collection<State> states;
}

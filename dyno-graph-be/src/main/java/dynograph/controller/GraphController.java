package dynograph.controller;

import dynograph.model.DynamicGraph;
import dynograph.service.GraphService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("graph")
public final class GraphController {
    private final GraphService graphService;

    public GraphController(GraphService graphService) {
        this.graphService = graphService;
    }

    @GetMapping("initial")
    public ResponseEntity<DynamicGraph> getInitial() {
        var graph = graphService.getInitial();
        return new ResponseEntity<>(graph, HttpStatus.OK);
    }

    @GetMapping("next/{stateId}")
    public ResponseEntity<DynamicGraph> getNextSubgraph(@PathVariable String stateId) {
        var graph = graphService.getNextSubgraph(stateId);
        return new ResponseEntity<>(graph, HttpStatus.OK);
    }
}

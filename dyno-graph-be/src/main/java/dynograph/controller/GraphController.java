package dynograph.controller;

import dynograph.model.Graph;
import dynograph.service.GraphService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("graph")
public final class GraphController {
    private final GraphService graphService;

    public GraphController(GraphService graphService) {
        this.graphService = graphService;
    }

    @GetMapping
    public ResponseEntity<Graph> get() {
        var graph = graphService.get();
        return new ResponseEntity<>(graph, HttpStatus.OK);
    }
}

import React, { useEffect } from 'react'
import ReactFlow, {
  Handle,
  Position,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  PanOnScrollMode
} from 'reactflow'
import 'reactflow/dist/style.css'

// Node definitions with proper spacing and paths
const initialNodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 0, y: 7 },
    data: {
      label: 'Introduction',
      type: 'shared',
      path: '/tutorials/big-button/introduction'
    }
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 200, y: 0 },
    data: {
      label: 'Tools and\nComponents',
      type: 'shared',
      path: '/tutorials/big-button/tools-and-components'
    }
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 375, y: 0 },
    data: {
      label: 'Connecting\nProgramming Hardware',
      type: 'shared',
      path: '/tutorials/big-button/connecting-programming-hardware'
    }
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 650, y: 0 },
    data: {
      label: 'Programming Hardware\nSetup and Test',
      type: 'shared',
      path: '/tutorials/big-button/programming-hardware-setup'
    }
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 925, y: 0 },
    data: {
      label: 'Rust Programming\nResources',
      type: 'shared',
      path: '/tutorials/big-button/rust-resources'
    }
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 1150, y: 0 },
    data: {
      label: 'Rust Project\nSetup',
      type: 'shared',
      path: '/tutorials/big-button/rust-project-setup'
    }
  },
  {
    id: '7',
    type: 'custom',
    position: { x: 1350, y: 0 },
    data: {
      label: 'Rust Project\nConfiguration',
      type: 'shared',
      path: '/tutorials/big-button/rust-project-configuration'
    }
  }
]

// Linear connection between nodes
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e6-7', source: '6', target: '7' }
]

// Individual nodes behavior and styling
const CustomNode = ({ data, isConnectable }) => {
  const isCurrentNode = data.isCurrentNode

  // Node Styling
  const getNodeStyle = (type) => {
    switch (type) {
      case 'hacker':
        return 'bg-green-100 text-green-800 border-green-500 dark:bg-green-950 dark:text-green-200 dark:border-green-700'
      case 'maker':
        return 'bg-blue-100 text-blue-800 border-blue-500 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-700'
      default:
        // return 'bg-black/5 text-black/70 border-black/20 dark:bg-white/5 dark:text-white/70 dark:border-white/20'
        return 'bg-black/5 text-accentColor border-accentColor dark:bg-white/5 dark:text-accentColor dark:border-accentColor/60'
      // return 'bg-black/10 text-accentColor/70 border-accentColor/20 dark:bg-white/5 dark:text-accentColor/70 dark:border-accentColor/20'
    }
  }

  // Connection handles (invisible but functional)
  const customHandleStyles = {
    opacity: 0,
    width: 0,
    height: 0
  }

  return (
    <div
      className={`border px-3 py-2 transition-all duration-1000 ${getNodeStyle(data.type)} ${isCurrentNode ? 'animate-float scale-110' : 'hover:scale-105'}`}
    >
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={customHandleStyles}
      />
      <a
        href={data.path}
        className="block flex min-h-[2.5rem] items-center justify-center whitespace-pre-line text-center text-lg font-medium !text-inherit no-underline"
      >
        {data.label}
      </a>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={customHandleStyles}
      />
    </div>
  )
}

const nodeTypes = { custom: CustomNode }

const FlowWithProvider = ({ nodeId }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const { setCenter } = useReactFlow()

  // Theme-aware edge styling
  useEffect(() => {
    const handleThemeChange = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      // const edgeColor = isDarkMode ? '#FFFFFF' : '#000000'
      const edgeColor = isDarkMode ? '#519639' : '#519639'

      setEdges((currentEdges) =>
        currentEdges.map((edge) => ({
          ...edge,
          style: {
            stroke: edgeColor,
            strokeWidth: 2
          }
        }))
      )
    }

    // Set initial edge colors and watch for theme changes
    handleThemeChange()
    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [setEdges])

  // Node highlighting and centering effect
  useEffect(() => {
    const updatedNodes = nodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        isCurrentNode: node.id === nodeId
      }
    }))
    setNodes(updatedNodes)

    const currentNode = nodes.find((node) => node.id === nodeId)
    if (currentNode) {
      setCenter(currentNode.position.x + 150, currentNode.position.y + 20, {
        duration: 1000,
        zoom: 1
      })
    }
  }, [nodeId, setNodes, setCenter])

  return (
    <div className="h-32 w-full overflow-x-auto border border-accentColor/60">
      <ReactFlow
        proOptions={{ hideAttribution: true }}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView={false}
        defaultViewport={{ x: 120, y: 20, zoom: 1.0 }}
        panOnScroll={true}
        panOnScrollMode={PanOnScrollMode.Horizontal}
        translateExtent={[
          [-Infinity, 0],
          [Infinity, 65]
        ]}
      >
        <Controls
          showInteractive={false}
          showZoom={false}
          showFitView={false}
          orientation="horizontal"
        />
      </ReactFlow>
    </div>
  )
}

const TutorialFlow = ({ nodeId }) => {
  return (
    <div className="space-y-2">
      <h3 className="dark:accentColor accentColor text-lg font-semibold">
        Tutorial Journey
      </h3>
      <ReactFlowProvider>
        <FlowWithProvider nodeId={nodeId} />
      </ReactFlowProvider>
    </div>
  )
}

export default TutorialFlow

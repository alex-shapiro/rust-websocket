initSidebarItems({"struct":[["Buffer","This crate uses buffered readers to read in the handshake quickly, in order to interface with other use cases that don't use buffered readers the buffered readers is deconstructed when it is returned to the user and given as the underlying reader and the buffer."],["HyperRequest","Upgrade a hyper connection to a websocket one."],["RequestStreamPair","If you have your requests separate from your stream you can use this struct to upgrade the connection based on the request given (the request should be a handshake)."]],"trait":[["IntoWs","Trait to take a stream or similar and attempt to recover the start of a websocket handshake from it. Should be used when a stream might contain a request for a websocket session."]],"type":[["Upgrade","The synchronous specialization of `WsUpgrade`. See the `WsUpgrade` docs for usage and the extra synchronous methods given by this specialization."]]});
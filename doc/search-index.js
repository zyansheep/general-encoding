var searchIndex = {};
searchIndex["integer_encoding"] = {"doc":"","items":[[8,"FixedInt","integer_encoding","FixedInt provides encoding/decoding to and from fixed int representations.\nThe emitted bytestring contains the bytes of the integer in little-endian order.",null,null],[10,"size_required","","Returns how many bytes are required to represent the given type.",0,{"inputs":[],"output":{"name":"usize"}}],[10,"encode_fixed","","Encode a value into the given slice.",0,null],[10,"decode_fixed","","Decode a value from the given slice.",0,null],[11,"encode_fixed_vec","","Helper: Encode the value and return a Vec.",0,{"inputs":[{"name":"fixedint"}],"output":{"name":"vec"}}],[11,"decode_fixed_vec","","Helper: Decode the value from the Vec.",0,{"inputs":[{"name":"vec"}],"output":{"name":"self"}}],[8,"VarInt","","Varint (variable length integer) encoding, as described in\nhttps://developers.google.com/protocol-buffers/docs/encoding.\nUses zigzag encoding (also described there) for signed integer representation.",null,null],[10,"required_space","","Returns the number of bytes this number needs in its encoded form.",1,{"inputs":[{"name":"varint"}],"output":{"name":"usize"}}],[10,"decode_var","","Decode a value from the slice.",1,null],[10,"encode_var","","Encode a value into the slice.",1,null],[11,"decode_var_vec","","Helper: (bit useless) - Decode value from the Vec.",1,null],[11,"encode_var_vec","","Helper: Encode a value and return the encoded form as Vec.",1,{"inputs":[{"name":"varint"}],"output":{"name":"vec"}}],[11,"encode_fixed_vec","","Helper: Encode the value and return a Vec.",0,{"inputs":[{"name":"fixedint"}],"output":{"name":"vec"}}],[11,"decode_fixed_vec","","Helper: Decode the value from the Vec.",0,{"inputs":[{"name":"vec"}],"output":{"name":"self"}}],[11,"decode_var_vec","","Helper: (bit useless) - Decode value from the Vec.",1,null],[11,"encode_var_vec","","Helper: Encode a value and return the encoded form as Vec.",1,{"inputs":[{"name":"varint"}],"output":{"name":"vec"}}]],"paths":[[8,"FixedInt"],[8,"VarInt"]]};
initSearch(searchIndex);

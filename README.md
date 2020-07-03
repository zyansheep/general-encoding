# variant-encoding

This crate provides encoding and decoding of integers and variant strings to and from bytestring
representations.

The format is described here: [Google's protobuf integer encoding technique](https://developers.google.com/protocol-buffers/docs/encoding).

## VarInt

`VarInt` encodes integers in blocks of 7 bits; the MSB is set for every byte but
the last, in which it is cleared.

Signed values are first converted to an unsigned representation using zigzag
encoding (also described on the page linked above), and then encoded as every
other unsigned number.

## VarString

`VarString` encodes a VarInt and a string of `u8` of the length of the `VarInt`

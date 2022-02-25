const fs                 = require( 'fs' );
const dirName            = 'crud';
const fileName           = 'crud.txt';
const updatedFileName    = "new-crud.txt";
const filePath           = dirName + '/' + fileName;
const newFilePath        = dirName + '/' + updatedFileName;
const fileContent        = 'This is test content for create operation.';
const fileUpdatedContent = 'This is test content for update opration.';

// Create Directory.
const createDir = ( dirName ) => {

  if ( ! fs.existsSync( process.cwd() + '/' + dirName ) ) {
    fs.mkdir( process.cwd() + '/' + dirName, { recursive: true }, ( err)  => {

      if ( err ) {
        console.error( 'Sorry!, error while creating directory.' );
      } else {
        console.log( 'Directory created successfully.' );
      }
    });
  }
};

// Create File.
const createFile = ( filePath, fileContent ) => {
  fs.writeFile( filePath, fileContent, ( err ) => {

    if ( err ) {
      console.error( 'Sorry!, error while creating file.' );
    } else {
      console.log( 'File created successfully.' );
    }
  });
};

// Read File.
const readFile = ( filePath ) => {
	fs.readFile( filePath, 'utf8', ( err, content ) => {

		if ( err ) {
			console.error( 'Sorry!, error occured while reading file.' );
		} else {
			console.log( content );
		}
	} );
}

// Update File in Appending Mode.
const updateFile = ( filePath ) => {
	fs.writeFile( filePath, fileUpdatedContent, { flag: 'a' }, ( err ) => {

		if ( err ) {
			console.error( 'Sorry!, error occured while updating file.' );
		} else {
			console.log( 'File updated successfully.' );
		}
	} );
}

// Rename File.
const renameFile = ( filePath, newFilePath ) => {
	fs.rename( filePath, newFilePath, (err) => {

		if ( err ) {
			console.error( 'Sorry!, error occured while renaming file.' );
		} else {
			console.log( 'File renamed successfully.' );
		}
	} );
}

// Delete Directory and File.
const deleteDirAndFile = ( filePath, dirName ) => {
	fs.unlink( filePath, ( err ) => {

		if ( err ) {
			console.error( 'Sorry!, error occured while deleting file.' );
		} else {
			fs.rmdir( process.cwd() + '/' + dirName, (err)=> {
				if ( err ) {
					console.error( 'Sorry!, error occured while deleting directory.' );
				} else {
					console.log( 'Directory deleted successfully.' );
				}
			} );
			console.log( 'File deleted successfully.' );
		}
	} );

	/* For Deleting Directory in Recursive Mode. */
	// fs.rm( process.cwd() + '/' + dirName, { recursive: true }, (err)=> {
	// 	if ( err ) {
	// 		console.error( 'Sorry!, error occured while deleting directory.' );
	// 	} else {
	// 		console.log( 'Directory deleted successfully.' );
	// 	}
	// } );
}

createDir( dirName );
createFile( filePath, fileContent );
readFile( filePath );
updateFile( filePath, fileUpdatedContent );
renameFile( filePath, newFilePath );
// deleteDirAndFile( filePath, dirName );

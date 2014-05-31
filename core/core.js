/**
 *  @file Core functions needed for NyaaNovels
 *
 *  @author Mio Akiyama
 *  @contact Mio-chan@irc.rizon.net, mio.akiyama@nyaa-nyaa.com
 */

/**
 *  loadFile()
 *  Arguments:
 *    - fileToLoad (String) - Load the file from the root of the project
 *
 *  Returns boolean:
 *    - Signifies insertion into head
 *
 *  Load a file based on URI.
 */

function loadFile(fileToLoad)
{
  var script = document.createElement('script');
  script.src = fileToLoad;
  script.async = false;
  document.head.appendChild(script);
  return true;
}

/**
 *  loadConfigFile()
 *  Arguments:
 *    - projectName (String) - Project to load
 *
 *  Returns boolean:
 *    - Signifies load success
 *
 *  Load the project based on machine name.
 */

function loadConfigFile(projectName)
{

}


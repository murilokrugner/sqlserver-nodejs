/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AD1010', {
    AD1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD1_NROPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD1_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AD1_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD1_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AD1_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD1_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD1_PROSPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_LOJPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD1_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD1_PROVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_STAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_VERBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AD1_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AD1_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AD1_FCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_FCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_PRIOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD1_NUMORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_MODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD1_COMUNI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_CODTMK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_CANAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_ENCERR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AD1_DTPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD1_MEMENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_REGSLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_PROPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_FEELIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD1_DTASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD1_OBSPRO: {
      type: "IMAGE",
      allowNull: true
    },
    AD1_CNTPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_USRASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    AD1_DTPENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD1_HRPENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AD1_RCINIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AD1_RCFECH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AD1_RCREAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AD1_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AD1_MTVENC: {
      type: "IMAGE",
      allowNull: true
    },
    AD1_SETOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD1_CODCAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AD1_VISTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD1_CODVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD1_SITVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD1_TPCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD1_CHVCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    AD1_IDESTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AD1_NVESTN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AD1_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'AD1010'
  });
};

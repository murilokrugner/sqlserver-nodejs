/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CND010', {
    CND_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CND_NUMMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CND_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CND_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CND_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CND_LJFORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CND_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CND_LOJACL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CND_VLTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_TOTADT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_RETCAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CND_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CND_VLMEAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_VLSALD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    CND_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CND_DATAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CND_DATAFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CND_ZERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CND_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CND_COMPET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    CND_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CND_VLCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_VLADIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_VLREAJ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_VLGER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CND_MEDRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CND_RETIFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CND_FLREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CND_VLPREV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_DESCME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_ALCAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CND_APROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CND_PARC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_DATA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CND_PARC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_DATA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CND_PARC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_DATA3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CND_PARC4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_DATA4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CND_PARCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CND_AUTFRN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CND_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CND_RESID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CND_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    CND_FILMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CND_FILCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CND_NUMTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CND_VLLIQD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CND_REVGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CND_ULTMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CND_RECMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CND_VLMULT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CND_VLBONI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CND010'
  });
};

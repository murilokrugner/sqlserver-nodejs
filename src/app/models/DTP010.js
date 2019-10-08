/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DTP010', {
    DTP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTP_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTP_LOTNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTP_DATLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTP_HORLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTP_QTDLOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTP_QTDDIG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTP_NUMSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTP_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTP_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTP_TIPLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTP_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTP_SITCTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTP_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTP_VIACOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTP_BACRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTP_CRIRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTP_PRORAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTP_ORIRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTP_CALRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTP_TABRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTP_TIPRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTP_TBARAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTP_TPARAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTP_CRDVFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTP_CRDVDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTP_NCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DTP_KM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTP_ROTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTP_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTP_CODNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTP_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    }
  }, {
    tableName: 'DTP010'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MB8010', {
    MB8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MB8_CODREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MB8_REFGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MB8_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MB8_CATEGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MB8_DESCPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MB8_DESCVL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MB8_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    MB8_TPREGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MB8_QTDMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MB8_QTDPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MB8_IDPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MB8_DESCTO: {
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
    }
  }, {
    tableName: 'MB8010'
  });
};

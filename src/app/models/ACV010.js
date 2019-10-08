/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACV010', {
    ACV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACV_CATEGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACV_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    ACV_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ACV_REFGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    ACV_SUVEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACV_SEQPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    ACV_ECDTEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACV_ECSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    }
  }, {
    tableName: 'ACV010'
  });
};

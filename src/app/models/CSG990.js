/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSG990', {
    CSG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSG_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CSG_DTBAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CSG_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSG_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSG_VALINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSG_VALDEB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSG_VALCRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSG_VALMOV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSG_VALFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSG_INDINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSG_INDFIM: {
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
    }
  }, {
    tableName: 'CSG990'
  });
};

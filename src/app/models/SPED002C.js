/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED002C', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ID_PART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUALIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    CODASSIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'SPED002C'
  });
};

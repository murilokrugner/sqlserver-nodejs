/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED002A', {
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
    DTULTALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    NIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    IM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    IE_ST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    SUFRAMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'SPED002A'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SRW010', {
    RW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RW_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RW_IDUSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RW_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    RW_ALIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RW_PROCESS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RW_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    RW_FILBROW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    RW_FILREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    RW_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    RW_SPFIL: {
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
    tableName: 'SRW010'
  });
};
